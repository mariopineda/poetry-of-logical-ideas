---
type: qod
publish: true
courses:
  - "Math 20-2"
  - "Math 30-2"
topic: "Data Analysis"
show_solution: true
prerequisites:
  - "[[Properties of Functions 1]]"
related:
  - "[[Environmental Data Analysis - Glaciers Lost 1]]"
  - "[[Environmental Data Analysis - Sea Level Trend 1]]"
---

## Question

The ozone layer is a region of Earth's atmosphere that absorbs most of the Sun's harmful ultraviolet radiation. Certain human-made chemicals like chlorofluorocarbons (CFC) used in refrigerants and spray cans create a hole in the ozone layer over Antarctica each spring. The size of the ozone hole between the years 1979 and 2018 can be modelled by the cubic function $s(t)=at^3+bt^2+ct+d$ where $t$ is the year since 1979, $s$ is the size of the ozone hole in millions of square kilometers and the parameters are $a=0.001787$, $b=-0.1324$, $c=3.1576$ and $d=0.1$

1. Sketch the function describing the size of the ozon hole. Label the axes appropriatelly. What are your window settings?
2. Determine the size of the ozon hole in 1979 and in 2018. How many times larger was it in 2018 compared to 1979? Round your answer to the nearest whole number.
3. What is an appropriate domain and range for this context?
4. Which year did the size of the ozon hole become larger than the land area of Canada? The total land area of Canada is 9093507 $\mbox{km}^2$.

## Solution

> [!example]- Show solution
>
> ### A.
>
> ![[Images/Legacy/ozone-hole-size.png]]
> Appropriate windows settings: X:$[0, 38, 1]$ and Y:$[0, 26.959, 1]$. Other windows settings are possible.
>
> ### B.
>
> In 1979 the ozone hole was 0.1 million $\mbox{km}^2$ and in 2018 26.959464 million $\mbox{km}^2$. In 2018 it was $\displaystyle\frac{26.959464}{0.1} = 264.59464 \approx 265$ times larger.
>
> ### C.
>
> Domain: $\{t | 0 \leq t \leq 38, t \in \mathbb{R} \}$ (set notation) or $[0,38]$ (interval notation).  
> Range: $\{s | 0 \leq s \leq 30 , s \in \mathbb{R} \}$ (set notation) or $[0, 30]$ (interval notation).
>
> ### D.
>
> Add a second graph at $Y\_2=9.093507$ and find the x-coordinate of the point of intersection. $x\_{intercept} = 3.27... \approx 3$, $1979+3=1982 \Rightarrow$ the size of the ozone hole became larger than the land area of Canada in 1982.
>
> > [!info]- Source
> > [NASA Ozone Watch (2019)](https://ozonewatch.gsfc.nasa.gov/)
>

