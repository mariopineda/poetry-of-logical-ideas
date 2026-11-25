// Temporary unlisted preview: runs after Quartz builds and touches no existing HTML.
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
const root=path.resolve('public'), slug='math/exponential-functions/solving-exponential-equations-graphically-1', name='logo-preview-9f4c72'
const source=path.join(root,slug+'.html'), dir=path.dirname(source)
let graphPath=path.join(root,'qod-graph.html')
try {await fs.access(graphPath)} catch {graphPath=path.join(root,'qod-graph','index.html')}
const graph=await fs.readFile(graphPath,'utf8')
const match=graph.match(/data-qod-graph\s*=\s*"([^"]+)"/i)??graph.match(/data-qod-graph\s*=\s*'([^']+)'/i)
if(!match) throw Error('Missing published graph payload')
const data=JSON.parse(decodeURIComponent(match[1]))
const colors=['#7048E8','#087AC1','#C026D3','#5B9F20','#008F78','#D97706','#B99A00','#2563EB','#D93B50'], courses=['10C','10-3','20-1','20-2','20-3','30-1','30-2','30-3','31']
let seed=12345; function rand(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}
const nodes=data.nodes.map(n=>{
  const ids=[...new Set((n.courses??[]).map(c=>courses.indexOf(c.replace(/^Math(?:ematics)?\s+/,''))).filter(i=>i>=0))]
  let cx=0,cy=0; for(const i of ids){const a=i*2*Math.PI/9-Math.PI/2;cx+=150*Math.cos(a);cy+=150*Math.sin(a)}
  cx/=Math.max(1,ids.length);cy/=Math.max(1,ids.length);const a=rand()*2*Math.PI,r=180*Math.sqrt(rand());
  return {id:n.id,cx,cy,x:cx+r*Math.cos(a),y:cy+r*Math.sin(a),colors:ids.map(i=>colors[i]),degree:0}
})
const lookup=new Map(nodes.map((n,i)=>[n.id,i]))
const links=data.links.map(l=>[lookup.get(l.source),lookup.get(l.target)]).filter(([i,j])=>i!==undefined&&j!==undefined&&i!==j)
for(const [i,j] of links){nodes[i].degree++;nodes[j].degree++}
const n=nodes.length;if(!n)throw Error('Empty graph')
// Layout work is entirely server/build-side. No graph simulation in the browser.
const fx=new Float64Array(n),fy=new Float64Array(n)
for(let k=0;k<100;k++){
  fx.fill(0);fy.fill(0)
  for(let i=0;i<n;i++){const a=nodes[i];fx[i]+=(a.cx-a.x)*.014;fy[i]+=(a.cy-a.y)*.014;for(let j=i+1;j<n;j++){const b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy+4;if(d2>25600)continue;const f=40/d2;fx[i]+=dx*f;fy[i]+=dy*f;fx[j]-=dx*f;fy[j]-=dy*f}}
  for(const [i,j] of links){const a=nodes[i],b=nodes[j],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,f=(d-28)*.014/d;fx[i]+=dx*f;fy[i]+=dy*f;fx[j]-=dx*f;fy[j]-=dy*f}
  for(let i=0;i<n;i++){nodes[i].x+=Math.max(-9,Math.min(9,fx[i]))*(1-k/120);nodes[i].y+=Math.max(-9,Math.min(9,fy[i]))*(1-k/120)}
}
const mx=nodes.reduce((s,p)=>s+p.x,0)/n,my=nodes.reduce((s,p)=>s+p.y,0)/n,r=Math.max(1,...nodes.map(p=>Math.hypot(p.x-mx,p.y-my)))
// Circular fit ensures nothing clips during rotation.
for(const p of nodes){p.x=270+(p.x-mx)*235/r;p.y=270+(p.y-my)*235/r}
const f=x=>x.toFixed(2),lines=links.map(([i,j])=>'M'+f(nodes[i].x)+' '+f(nodes[i].y)+'L'+f(nodes[j].x)+' '+f(nodes[j].y)).join('')
const dots=nodes.map(p=>{
  const r=Math.min(3.4,1.45+Math.sqrt(p.degree)*.28),x=f(p.x),y=f(p.y)
  if(p.colors.length<2)return `<circle cx="${x}" cy="${y}" r="${f(r)}" fill="${p.colors[0]??'#9299a3'}"/>`
  return p.colors.map((c,i)=>{const a=i*2*Math.PI/p.colors.length,b=(i+1)*2*Math.PI/p.colors.length;return `<path fill="${c}" d="M${x} ${y} L${f(p.x+r*Math.cos(a))} ${f(p.y+r*Math.sin(a))} A${f(r)} ${f(r)} 0 0 1 ${f(p.x+r*Math.cos(b))} ${f(p.y+r*Math.sin(b))} Z"/>`}).join('')
}).join('')
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="360" viewBox="0 0 540 540"><path d="${lines}" stroke="#8a94a5" stroke-opacity=".26" stroke-width=".85" fill="none"/>${dots}</svg>`
let html=await fs.readFile(source,'utf8')
if(!/<\/head>/i.test(html)||!/<\/body>/i.test(html))throw Error('Unexpected generated HTML')
const css=`<meta name="robots" content="noindex,nofollow,noarchive"><style id="qod-logo-preview-style">
.page-title>a.qod-logo-preview{position:relative;overflow:hidden;background-image:none!important;border:1px solid color-mix(in srgb,currentColor 28%,transparent);border-radius:15%;box-sizing:border-box}
.qod-logo-preview>img.qod-logo-orbit{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none;animation:qodLogoOrbit 1500s linear infinite;animation-play-state:paused;transform-origin:50% 50%}
.qod-logo-preview.qod-logo-running>img.qod-logo-orbit{animation-play-state:running}
@keyframes qodLogoOrbit{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce),(max-width:800px){.qod-logo-preview>img.qod-logo-orbit{animation:none!important}}
</style>`
const js=`<script>(()=>{
const route=location.pathname;let a,img,o,visible=false,disposed=false;
const sync=()=>a?.classList.toggle('qod-logo-running',visible&&!document.hidden&&!disposed);
const clean=()=>{disposed=true;o?.disconnect();document.removeEventListener('visibilitychange',sync);document.removeEventListener('nav',nav);a?.classList.remove('qod-logo-preview','qod-logo-running');img?.remove()};
const nav=()=>{if(location.pathname!==route)clean()};
const init=async()=>{if(disposed||location.pathname!==route)return;a=document.querySelector('.page-title > a');if(!a)return;img=new Image();img.className='qod-logo-orbit';img.alt='';img.setAttribute('aria-hidden','true');img.decoding='async';img.src=new URL('${name}.webp',location.href).href;try{await img.decode()}catch{return}if(disposed||location.pathname!==route||!a.isConnected)return;a.appendChild(img);a.classList.add('qod-logo-preview');if('IntersectionObserver'in window){o=new IntersectionObserver(e=>{visible=e[0]?.isIntersecting??false;sync()});o.observe(a)}else{visible=true;sync()}document.addEventListener('visibilitychange',sync)};
document.addEventListener('nav',nav);const schedule=()=>{'requestIdleCallback'in window?requestIdleCallback(init,{timeout:2000}):setTimeout(init,50)};document.readyState==='complete'?schedule():window.addEventListener('load',schedule,{once:true});
})();</script>`
html=html.replace(/<\/head>/i,css+'</head>').replace(/<\/body>/i,js+'</body>')
const imagePath=path.join(dir,name+'.webp'),htmlPath=path.join(dir,name+'.html')
await sharp(Buffer.from(svg)).webp({quality:68,alphaQuality:75,effort:6}).toFile(imagePath)
await fs.writeFile(htmlPath,html)
console.log('Unlisted QOD logo preview:',path.relative(root,htmlPath),n,'nodes',links.length,'links',(await fs.stat(imagePath)).size,'WebP bytes')