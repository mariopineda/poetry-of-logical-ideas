---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Related Rates"
show_solution: false
prerequisites:
  - "[[Derivative of Trigonometric Functions 2d]]"
---

## Question

A beacon at a lighthouse, located a perpendicular distance of 315 m from point R on a straight shoreline, revolves at 1 revolution / minute. How fast does the beam of light sweep along the shoreline at point S located on the shoreline 425 m from point R?

## Solution

Let the distance that the beam has swept from point R be $x$ m. Let the angle between the perpendicular to point R and the beam be $\theta$. The elapsed time $t$ in seconds is measured from the moment the beams hits point R where $\frac{\displaystyle d\theta}{\displaystyle dt} = 2\pi$ radians/minute and we are looking to determine $\frac{\displaystyle dx}{\displaystyle dt}$.

Let $\tan \theta = \frac{\displaystyle x}{\displaystyle 315}$ and thus $x=315 \tan \theta$. Differentiating implicitly with respect to $t$,
$$
\frac{dx}{dt} = 315 \sec^2 \theta \frac{d\theta}{dt}
$$
and so
$$
\frac{dx}{dt} = 315 \sec^2 \theta (2\pi) = 630\pi \sec^2 \theta
$$
To determine $\sec^2 \theta$ we can either use the Pythagorean Theorem to determine the distance between the beacon and point S (the length of the hypotenuse) and use the identity $\sec^2 \theta = \frac{\displaystyle 1}{\displaystyle \sin^2 \theta}$ or, alternatively, we can divide the [[Pythagorean Identity]] $\sin^2 \theta + \cos^2 \theta = 1$ by $\cos^2 \theta$ as follows
$$
\frac{\sin^2 \theta}{\cos^2 \theta} + \frac{\cos^2 \theta}{\cos^2 \theta} = \frac{1}{\cos^2 \theta}
$$
$$
\tan^2 \theta +1 = \sec^2 \theta
$$
This allows us to rewrite
$$
\frac{dx}{dt} = 630\pi \sec^2 \theta
$$
as
$$
\frac{dx}{dt} = 630\pi (\tan^2 \theta +1)
$$
where $\tan^2 \theta = \left(\frac{\displaystyle 425}{\displaystyle 315}\right)^2$ resulting in
$$
\frac{dx}{dt} = 630\pi \left[\left(\frac{\displaystyle 425}{\displaystyle 315}\right)^2 +1\right] = 5582 \mbox{m}/\mbox{min}
$$
Thus when the beam is 425 m from point R it is sweeping along the shore at at approximately 5580 m/min.

