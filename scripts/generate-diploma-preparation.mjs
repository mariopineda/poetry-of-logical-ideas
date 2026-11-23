/**
 * OSCULATORIUM-DIPLOMA-PREP-V3
 * Rebuilds the Diploma Preparation Centre from published Math QOD notes
 * during GitHub Pages deployment. No dependencies, no student navigation.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const mathRoot = process.env.OSC_QOD_ROOT
  ? path.resolve(process.env.OSC_QOD_ROOT)
  : path.join(root, 'content', 'Math')
const dest = path.join(root, 'quartz', 'static', 'diploma-preparation')
const fallbackPath = path.join(dest, 'fallback_candidates.json')
const panelPath = path.join(root, 'quartz', 'static', 'teacher-control-panel', 'index.html')
const marker = 'data-osc-diploma-prep-button="true"'
const button = `<a ${marker} href="../../static/diploma-preparation/" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:10px 14px;border-radius:8px;background:var(--text);color:var(--bg);font-weight:700;text-decoration:none;white-space:normal;">Open Diploma Prep Centre</a>`

function fail(s) { throw new Error('OSCULATORIUM DIPLOMA PREP: ' + s) }
function walk(dir) {
  if (!fs.existsSync(dir)) fail('QOD source missing: ' + dir)
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => {
    const full = path.join(dir,e.name)
    return e.isDirectory() ? walk(full) : e.isFile() && e.name.toLowerCase().endsWith('.md') ? [full] : []
  })
}
function parseScalar(v) {
  v=String(v ?? '').trim()
  if((v.startsWith('"') && v.endsWith('"'))||(v.startsWith("'")&&v.endsWith("'"))){
    if(v.startsWith('"')){try{return JSON.parse(v)}catch{}}
    return v.slice(1,-1)
  }
  if(v.toLowerCase()==='true')return true
  if(v.toLowerCase()==='false')return false
  return v
}
function parseFm(text) {
  const m=text.replace(/^\uFEFF/,'').match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/)
  if(!m)return null
  const out={}; const lines=m[1].split(/\r?\n/)
  for(let i=0;i<lines.length;i++) {
    const x=lines[i].match(/^([\w-]+):\s*(.*)$/); if(!x)continue
    const key=x[1];const value=x[2].trim()
    if(value){
      if(value.startsWith('[')&&value.endsWith(']'))out[key]=value.slice(1,-1).split(',').map(v=>parseScalar(v))
      else out[key]=parseScalar(value)
    }else{
      const entries=[];let j=i+1
      while(j<lines.length){const a=lines[j].match(/^\s*-\s+(.*?)\s*$/);if(!a)break;entries.push(parseScalar(a[1]));j++}
      out[key]=entries.length?entries:'';i=j-1
    }
  }
  return {fm:out,body:m[2]}
}
function slug(x){return x.toLowerCase().replaceAll('&',' and ').replaceAll('_',' ').replace(/[^\p{L}\p{N}.\-\s]/gu,'').replace(/\s+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'')}
function urlFor(rel){return 'https://mariopineda.github.io/poetry-of-logical-ideas/math/'+rel.replace(/\.md$/i,'').split('/').map(slug).join('/')}
function links(body,section,titleIndex){
  const r=/^(?:##\s+|>\s*\[![^\]]+\][^\r\n]*?\b)(Review First|Explore Also|Build Toward)\b[^\r\n]*$/gim
  const hs=[...body.matchAll(r)]; const result=[];const seen=new Set()
  for(let i=0;i<hs.length;i++){
    if(hs[i][1].toLowerCase()!==section.toLowerCase())continue
    const chunk=body.slice(hs[i].index+hs[i][0].length, hs[i+1]?.index ?? body.length)
    for(const x of chunk.matchAll(/\[\[([^\]]+)\]\]/g)){
      const title=x[1].split('|')[0].split('#')[0].replaceAll('\\','/').split('/').at(-1).replace(/\.md$/i,'').trim()
      const target=titleIndex.get(title)
      if(target && target.published && !seen.has(title)){
        result.push({title,url:target.url});seen.add(title)
      }
      if(result.length>=6)break
    }
  }
  return result
}
if(!fs.existsSync(fallbackPath))fail('Approved pre-existing QOD list is missing')
const approved=new Set(JSON.parse(fs.readFileSync(fallbackPath,'utf8')).map(x=>x.relativePath))
const all=[];const index=new Map()
for(const file of walk(mathRoot)){
  const md=fs.readFileSync(file,'utf8'), parsed=parseFm(md)
  if(!parsed || parsed.fm.type!=='qod')continue
  const rel=path.relative(mathRoot,file).replaceAll('\\','/')
  const name=path.basename(file,'.md'),fm=parsed.fm
  const courses=(Array.isArray(fm.course??fm.courses)?fm.course??fm.courses:[fm.course??fm.courses]).filter(Boolean).map(String)
  const item={file,rel,name,fm,courses,body:parsed.body,url:urlFor(rel),published:fm.publish===true}
  all.push(item)
  if(!index.has(name))index.set(name,item);else index.set(name,null)
}
const questions=[]
for(const q of all){
  const fm=q.fm, key='QOD Question Bank/'+q.rel
  if(!(fm.diploma_eligible===true || (approved.has(key)&&fm.diploma_eligible!==false)))continue
  if(!q.published)continue
  if(!q.courses.some(c=>c==='Mathematics 30-1'||c==='Mathematics 30-2'))continue
  const id=String(fm.qod_id||'OLDER-'+key)
  const cognitive=String(fm.diploma_cognitive_level??''),standard=String(fm.diploma_performance_standard??'')
  let difficulty='unclassified'
  if(/problem[ -]?solving|high[ -]?order/i.test(cognitive)||/excellence|challeng/i.test(standard))difficulty='challenging'
  else if(/procedural|conceptual/i.test(cognitive)||/acceptable|moderate/i.test(standard))difficulty='moderate'
  questions.push({id,title:q.name,topic:String(fm.topic || q.rel.split('/')[0]),courses:q.courses,
    certified:fm.diploma_ready===true,difficulty,source:id.startsWith('DIP-')?'diploma':'existing',url:q.url,
    reviewFirst:links(q.body,'Review First',index),exploreAlso:links(q.body,'Explore Also',index),buildToward:links(q.body,'Build Toward',index)})
}
questions.sort((a,b)=>a.topic.localeCompare(b.topic)||a.title.localeCompare(b.title))
const ids=new Set(questions.map(q=>q.id))
if(ids.size!==questions.length)fail('Duplicate QOD identifiers')
const diplomaAdaptations=questions.filter(q=>q.source==='diploma').length
const existingPractice=questions.length-diplomaAdaptations
if(diplomaAdaptations<387)fail('Expected at least 387 diploma-derived QODs, found '+diplomaAdaptations)
if(!fs.existsSync(path.join(dest,'index.html')))fail('Missing Diploma Preparation HTML app')
const data={schemaVersion:2,generatedAt:new Date().toISOString(),questionCount:questions.length,
  certifiedCount:questions.filter(q=>q.certified).length,diplomaAdaptations,existingPractice,questions}
fs.writeFileSync(path.join(dest,'questions.json'),JSON.stringify(data),'utf8')
fs.writeFileSync(path.join(dest,'build-report.json'),JSON.stringify({total:questions.length,diploma:diplomaAdaptations,older:existingPractice},null,2),'utf8')
if(!fs.existsSync(panelPath))fail('Teacher QOD control panel HTML is missing')
let html=fs.readFileSync(panelPath,'utf8')
if(!html.includes(marker)){
  const s=/<section\b[^>]*data-osc-teacher-race-tool="true"[^>]*>[\s\S]*?<\/section>/i.exec(html)
  if(!s || !s[0].includes('Open Mental Math Race Generator'))fail('Classroom tools section not found')
  const revised=s[0].replace('</section>',button+'\n</section>')
  html=html.slice(0,s.index)+revised+html.slice(s.index+s[0].length)
  fs.writeFileSync(panelPath,html,'utf8')
}
if(!html.includes('href="../../static/diploma-preparation/"'))fail('Teacher panel does not link to the Diploma Preparation Centre')
console.log(`Diploma Preparation Centre generated: ${questions.length} questions (${diplomaAdaptations} adaptations, ${existingPractice} older); teacher button verified.`)
