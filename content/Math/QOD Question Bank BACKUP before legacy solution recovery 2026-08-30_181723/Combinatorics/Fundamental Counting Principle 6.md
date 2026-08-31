---
type: qod
publish: true
courses:
  - "Math 30-1"
  - "Math 30-2"
topic: "Fundamental Counting Principle"
show_solution: true
prerequisites: []
related:
  - "[[Fundamental Counting Principle 5]]"
---

## Question

In a war zone, households experience severe shortages of electricity, water, and fuel. Each day:

- Electricity:Ã‚Â Available in 2 disjoint 4-hour blocks (e.g., 8 AMÃ¢â‚¬â€œ12 PM or 4 PMÃ¢â‚¬â€œ8 PM).    
- Water:Ã‚Â Running for 1 hour, split into 3 possible time slots (6 AM, 12 PM, or 8 PM).
- Fuel:Ã‚Â Available for cooking in 1 time slot (either 12 PM or 6 PM).

How many unique daily schedules can a household have for accessing all three utilities?

## Solution

> [!example]- Show solution
>
> 1. Electricity:
> - There are 2 disjoint 4-hour blocks available.
> - Therefore, there are 2 options for electricity.
>
> 2. Water:
> - Water is available for 1 hour, split into 3 possible time slots: 6 AM, 12 PM, or 8 PM.
> - Therefore, there are 3 options for water.
>
> 3. Fuel:
> - Fuel is available for cooking in 1 time slot: either 12 PM or 6 PM.
> - Therefore, there are 2 options for fuel.
>
> The FCP states that if there are $m$ ways to do one thing and $n$ ways to do another, then there are $m /times n$ ways to do both. In this case,1 we have:
> - Number of electricity options: 2
> - Number of water options: 3
> - Number of fuel options: 2
>
> To find the total number of unique daily schedules, we multiply the number of options for each utility:
>
> Total schedules = (Electricity options) * (Water options) * (Fuel options)
>
> Total schedules $= 2 \times 3 \times 2$
>
> Total schedules = 12 unique daily schedules
>

