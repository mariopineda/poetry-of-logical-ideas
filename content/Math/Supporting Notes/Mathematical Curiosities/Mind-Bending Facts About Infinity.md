---
type: note
publish: true
courses:
  - "Math 10C"
  - "Math 20-1"
  - "Math 20-2"
  - "Math 30-1"
  - "Math 30-2"
  - "Math 31"
topic: "Infinity"
aliases:
  - "Mathematical Infinity Trivia"
  - "Strange Facts About Infinity"
  - "Infinity Facts"
prerequisites:
  - "[[Real Number System]]"
related:
  - "[[Rational and Irrational Numbers]]"
  - "[[Sequences and Series]]"
  - "[[Limits]]"
---

# Mind-Bending Facts About Infinity

Infinity is one of the strangest ideas in mathematics. It appears when something continues without end, but **infinity is not an ordinary real number**. You cannot always calculate with $\infty$ in the same way that you calculate with $2$, $-5$, or $\pi$.

The symbol for infinity is

$$
\infty.
$$

The facts below show why infinity is both useful and deeply bizarre.

## 1. There is no largest counting number

Suppose someone claims that $N$ is the largest counting number. You can immediately form

$$
N+1,
$$

which is larger. Therefore, the counting numbers

$$
1,2,3,4,\ldots
$$

never end.

This is called **potential infinity**: no matter how far you count, you can always continue.

## 2. An infinite hotel can be full and still accept another guest

Imagine a hotel with rooms numbered

$$
1,2,3,4,\ldots
$$

Every room is occupied. In an ordinary hotel, there would be no vacancy. In **Hilbert's Hotel**, the manager can move every guest from room $n$ to room $n+1$:

$$
1\to2,\qquad 2\to3,\qquad 3\to4,\qquad\ldots
$$

Room $1$ becomes available. A completely full infinite hotel has made room for one more guest.

## 3. A full infinite hotel can even accept infinitely many new guests

Move the guest in room $n$ to room $2n$:

$$
1\to2,\qquad 2\to4,\qquad 3\to6,\qquad\ldots
$$

All the odd-numbered rooms are now empty:

$$
1,3,5,7,\ldots
$$

That creates room for infinitely many new guests.

![[Infinity - Hilbert Hotel.png]]

> [!important]
> This does not mean infinity behaves like an ordinary number. It describes a pairing between infinite sets.

## 4. There are as many even numbers as counting numbers

The even numbers appear to be only half of the counting numbers:

$$
2,4,6,8,\ldots
$$

However, every counting number $n$ can be paired with exactly one even number $2n$:

| Counting number | Even number |
|---:|---:|
| $1$ | $2$ |
| $2$ | $4$ |
| $3$ | $6$ |
| $4$ | $8$ |
| $\vdots$ | $\vdots$ |

Nothing is left over in either list. Mathematicians therefore say that the two sets have the same **cardinality**, or the same number of elements.

## 5. The integers are no more numerous than the counting numbers

The integers include positive numbers, negative numbers, and zero:

$$
\ldots,-3,-2,-1,0,1,2,3,\ldots
$$

They can still be placed in a single endless list:

$$
0,1,-1,2,-2,3,-3,\ldots
$$

Any infinite set that can be arranged in a list like this is called **countably infinite**.

## 6. Even all the rational numbers are countable

The rational numbers contain every number that can be written as

$$
\frac{a}{b},
$$

where $a$ and $b$ are integers and $b\ne0$.

There are infinitely many fractions between any two different numbers. Despite this, the rational numbers can be organized into one infinite list. They are countably infinite too.

> [!note]
> Some fractions appear in more than one form, such as $\frac12=\frac24$. Repeated values can be skipped while constructing the list.

## 7. Some infinities are larger than others

The real numbers cannot be placed in a complete list. Cantor's **diagonal argument** shows why.

Imagine trying to list every decimal between $0$ and $1$. Create a new decimal by changing the first digit of the first number, the second digit of the second number, the third digit of the third number, and so on. The new decimal differs from every number in the list in at least one position.

Therefore, the list was incomplete. The real numbers form an **uncountable infinity**, which is larger than the infinity of the counting numbers.

![[Infinity - Cantor Diagonal Argument.png]]

## 8. A tiny interval contains as many real numbers as the entire real line

The interval

$$
(0,1)
$$

has exactly the same number of real numbers as

$$
(-\infty,\infty).
$$

One function that pairs them is

$$
y=\tan\left(\pi\left(x-\frac12\right)\right).
$$

As $x$ moves from just above $0$ to just below $1$, $y$ takes every real value from negative infinity to positive infinity.

![[Infinity - Interval to Real Line.png]]

An interval of length $1$ is therefore just as infinite as the entire real number line.

## 9. There is no largest infinity

Given any set, mathematicians can form its **power set**: the collection of all its possible subsets.

If a finite set has $n$ elements, its power set has

$$
2^n
$$

elements. Cantor proved that the power set of **any** set is always larger than the original set—even when the original set is infinite.

So after finding one size of infinity, a still larger infinity can always be constructed.

## 10. The decimal $0.999\ldots$ is exactly equal to $1$

Let

$$
x=0.999\ldots
$$

Then

$$
10x=9.999\ldots
$$

Subtract the first equation from the second:

$$
10x-x=9.999\ldots-0.999\ldots
$$

$$
9x=9
$$

$$
x=1.
$$

Therefore,

$$
\boxed{0.999\ldots=1}
$$

The two expressions are different decimal representations of the same number.

## 11. Infinitely many positive numbers can have a finite sum

Consider

$$
\frac12+\frac14+\frac18+\frac1{16}+\cdots
$$

Each term is positive, and there are infinitely many terms. Yet the sum approaches exactly $1$:

$$
\frac12+\frac14+\frac18+\frac1{16}+\cdots=1.
$$

![[Infinity - Geometric Series.png]]

This can be pictured by repeatedly filling half of the space that remains. The process never ends, but the total never exceeds $1$.

## 12. Zeno's Dichotomy Paradox says you can never reach the wall

Imagine that you are standing $1$ unit from a wall. First travel half the distance:

$$
\frac12.
$$

You now travel half the remaining distance, then half of what remains again:

$$
\frac12,\quad \frac14,\quad \frac18,\quad \frac1{16},\quad\ldots
$$

Your successive positions are

$$
\frac12,\quad \frac34,\quad \frac78,\quad \frac{15}{16},\quad\ldots
$$

Zeno argued that you must complete infinitely many stages, so you can never actually arrive at the wall. That is the apparent paradox.

![[Infinity - Zenos Dichotomy Paradox.png]]

The modern resolution uses the same convergent series as the previous fact:

$$
\frac12+\frac14+\frac18+\frac1{16}+\cdots=1.
$$

There are infinitely many mathematical subdivisions, but their total distance is only $1$ unit. If you move at a constant speed, the time required for each stage also becomes shorter, and the total time remains finite. The sequence of positions approaches the wall, and its limit is exactly the wall.

> [!note]
> The paradox does not prove that motion is impossible. It reveals how easily intuition can confuse an infinite number of subdivisions with an infinite total distance or time.

## 13. Other infinite sums grow without bound

Not every infinite sum has a finite answer. For example,

$$
1+1+1+1+\cdots
$$

grows without bound.

Even the harmonic series

$$
1+\frac12+\frac13+\frac14+\frac15+\cdots
$$

grows without bound, although its terms get closer and closer to zero.

> [!important]
> Terms approaching zero are necessary for an infinite series to have a finite sum, but that condition alone is not enough.

## 14. A shape can have finite volume but infinite surface area

Graph

$$
y=\frac1x,\qquad x\ge1,
$$

and rotate the curve around the $x$-axis. The resulting shape is called **Gabriel's Horn**.

![[Infinity - Gabriels Horn.png]]

Its volume is finite:

$$
V=\pi.
$$

Its surface area, however, is infinite.

This produces the strange statement that the horn can be filled with a finite amount of paint, but its inside surface cannot be completely painted using a finite amount of paint of positive thickness.

## 15. A snowflake can have infinite perimeter but finite area

The **Koch snowflake** begins with an equilateral triangle. Each side is repeatedly replaced by four smaller segments.

At every stage:

- the perimeter increases;
- the added pieces become smaller;
- the total area approaches a finite value.

After infinitely many stages, the boundary has infinite length, but the enclosed area remains finite.

![[Infinity - Koch Snowflake.png]]

## 16. Infinitely many fractions lie between any two different numbers

Choose any two numbers $a$ and $b$ with $a<b$. Their average is

$$
\frac{a+b}{2},
$$

and it lies strictly between them:

$$
a<\frac{a+b}{2}<b.
$$

You can repeat this process forever. There is no such thing as the “next” real number.

## 17. Almost every real number is irrational

The rational numbers are countably infinite, but the real numbers are uncountably infinite. This means the irrational numbers vastly outnumber the rational numbers.

In an ideal mathematical model where a real number is selected at random from an interval, the probability of selecting a rational number is $0$—even though infinitely many rational numbers lie in every interval.

Probability $0$ here means “almost never,” not “logically impossible.”

## 18. There are infinitely many prime numbers

Suppose there were only finitely many primes:

$$
p_1,p_2,\ldots,p_n.
$$

Form the number

$$
N=p_1p_2\cdots p_n+1.
$$

Dividing $N$ by any prime on the list leaves a remainder of $1$. Therefore, $N$ is either prime or has a prime factor missing from the list. Either possibility contradicts the claim that the list contained every prime.

Therefore, there are infinitely many primes.

## 19. The Banach–Tarski paradox says one ball can become two

In advanced mathematics, a solid ball can be separated into a small finite number of extremely strange sets of points. Those sets can then be rearranged to form **two balls**, each the same size as the original.

This is the **Banach–Tarski paradox**.

It does not work with physical objects. The “pieces” are not ordinary solid chunks, cannot actually be constructed, and do not have well-defined volumes. The result depends on the behaviour of infinite sets and a mathematical principle called the **axiom of choice**.

## 20. Arithmetic with infinity needs special rules

Infinity is not an ordinary number, so the table below is best understood as **shorthand for behaviour in limits or in the extended real-number system**. Let $a$ represent a finite, nonzero real number.

### Results determined by signs

| Expression | Result |
|---|---:|
| $(+\infty)+(+\infty)$ | $+\infty$ |
| $(-\infty)+(-\infty)$ | $-\infty$ |
| $(+\infty)-(-\infty)$ | $+\infty$ |
| $(-\infty)-(+\infty)$ | $-\infty$ |
| $(+\infty)(+\infty)$ | $+\infty$ |
| $(+\infty)(-\infty)$ | $-\infty$ |
| $(-\infty)(-\infty)$ | $+\infty$ |
| $(+\infty)/a$, where $a>0$ | $+\infty$ |
| $(+\infty)/a$, where $a<0$ | $-\infty$ |
| $(-\infty)/a$, where $a>0$ | $-\infty$ |
| $(-\infty)/a$, where $a<0$ | $+\infty$ |
| $a/(+\infty)$ | $0$ |
| $a/(-\infty)$ | $0$ |
| $1/(+\infty)$ | $0^+$ |
| $1/(-\infty)$ | $0^-$ |

The symbols $0^+$ and $0^-$ mean approaching zero through positive or negative values. They do not represent two different numbers; both limits equal $0$.

### Indeterminate forms

These expressions do **not** have automatic answers:

| Expression | Classification |
|---|---|
| $(+\infty)+(-\infty)$ | Indeterminate |
| $(+\infty)-(+\infty)$ | Indeterminate |
| $(-\infty)-(-\infty)$ | Indeterminate |
| $(+\infty)/(+\infty)$ | Indeterminate |
| $(+\infty)/(-\infty)$ | Indeterminate |
| $(-\infty)/(+\infty)$ | Indeterminate |
| $(-\infty)/(-\infty)$ | Indeterminate |
| $0\cdot(\pm\infty)$ | Indeterminate |
| $(\pm\infty)^0$ | Indeterminate |
| $1^{\pm\infty}$ | Indeterminate |
| $0^0$ | Indeterminate in limits |

For example, as $x$ becomes very large,

$$
x-x=0,
$$

but

$$
2x-x=x\to\infty.
$$

Both resemble “infinity minus infinity,” but they have different outcomes. The original functions must be examined before a limit can be determined.

> [!important]
> Division by zero remains undefined. A one-sided limit may approach $+\infty$ or $-\infty$, but that does not make infinity an answer to ordinary division by zero.

## 21. Infinity is not a destination

The statement

$$
x\to\infty
$$

does not mean that $x$ eventually reaches a number called infinity. It means that $x$ increases beyond every fixed real-number boundary.

Similarly,

$$
\lim_{x\to\infty}\frac1x=0
$$

means that $\frac1x$ can be made as close to $0$ as desired by choosing a sufficiently large value of $x$.

## Final Thought

Finite sets match everyday intuition: a proper part is smaller than the whole. Infinite sets do not have to behave that way. A part can be the same size as the whole, different infinite sets can have different sizes, and an endless process can sometimes produce a finite result.

That is what makes infinity so useful—and so wonderfully strange.
