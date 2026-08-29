---
type: qod
publish: true
courses:
  - "Math 30-1"
  - "Math 30-2"
topic: "Fundamental Counting Principle"
show_solution: false
prerequisites:
  - "[[Fundamental Counting Principle 4]]"
---

## Question

Harry Potter is a series of seven fantasy novels published between 1997-2007 by British author J.K. Rowling. The books follow the adventures of young wizard Harry Potter and his best friends Ron Weasley and Hermione Granger. Each book corresponds to one year the trio attends Hogwarts School of Witchcraft and Wizardry.

![[Harry Potter.jpg]]

a) How many ways are there of arranging the Harry Potter books side by side on a shelf?

b) How many ways are there of arranging the Harry Potter books side by side on a shelf in the order they were published?

c) How many ways are there of arranging the Harry Potter books side by side on a shelf starting with the books with green covers? 

d) How many ways are there of arranging the Harry Potter books side by side on a shelf  with the book with red  cover in the middle?

## Solution

**a) How many ways are there of arranging the Harry Potter books side by side on a shelf?**
- We have 7 distinct books.
- For the first position on the shelf, we have 7 choices.
- For the second position, we have 6 choices remaining.
- For the third position, we have 5 choices, and so on.
- This is a permutation problem, and the number of ways to arrange $n$ distinct items is $n!$ (n factorial).
- Therefore, the number of ways to arrange the 7 books is $7! = 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 = 5040$.

**b) How many ways are there of arranging the Harry Potter books side by side on a shelf in the order they were published?**
- There is only one correct order in which the books were published.
- Therefore, there is only 1 way to arrange the books in the correct published order.

**c) How many ways are there of arranging the Harry Potter books side by side on a shelf starting with the books with green covers?**
- There are two books with green covers.
- For the first position, we have 2 choices (either of the green books).
- For the second position, we 1 choice (the second green book).
- For the third position, we have 5 remaining books to choose from.
- This continues until the last position.
- So, the calculation is... FCP: $2 \times 1 \times 5 \times 4 \times 3 \times 2 \times 1 = 2 \times 5! = 2 \times 120 = 240$
- There are 240 ways of arranging the Harry Potter books side by side on a shelf starting with the books with green covers

**d) How many ways are there of arranging the Harry Potter books side by side on a shelf with the book with the red cover in the middle?**

- The middle position is fixed with the red-covered book.
- There are 6 remaining books to arrange in the other 6 positions.
- For the first position, we have 6 choices.
- For the second position, we have 5 choices.
- This continues until the 6th position.
- So, the calculation is... FCP: $6 \times 5 \times 4 \times 1 \times 3 \times 2 \times 1 = 6! = 720$.
- There are 720 ways of arranging the Harry Potter books side by side on a shelf with the book with the red cover in the middle

