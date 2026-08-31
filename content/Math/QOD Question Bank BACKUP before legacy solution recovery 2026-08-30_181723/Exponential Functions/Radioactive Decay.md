---
type: qod
publish: true
courses:
  - "Math 30-1"
  - "Math 30-2"
topic: "Exponential Growth and Decay"
show_solution: true
prerequisites:
  - "[[Exponential Equations]]"
related:
  - "[[Exponential Growth - Finance]]"
---

## Question

**Chernobyl Fallout: Modeling Cesium-137 Decay in a Swedish Forest**

In 1986, the Chernobyl nuclear disaster in Ukraine released large amounts of radioactive materials into the atmosphere. One of these isotopes, **cesium-137**, has a half-life of approximately 30 years, meaning that every 30 years, half of the cesium-137 decays into a non-radioactive element.

Due to prevailing winds, radioactive materialsÃ¢â‚¬â€including cesium-137Ã¢â‚¬â€were carried northward and deposited in various regions, including forests in Sweden and Finland. In one Swedish forest, the concentration of cesium-137 was measured at **1200 Bq/kg** (becquerels per kilogram) immediately following the disaster in 1986.

Answer the following questions using exponential decay models:

1. **Write an exponential decay function** for cesium-137 in the form
    
    A(t)=A0Ã¢â€¹â€¦btA(t) = A_0 \cdot b^t
    
    where:
    
    - A(t)A(t) is the amount of cesium-137 at time tt (in years after 1986),
        
    - A0A_0 is the initial amount of cesium-137,
        
    - bb is the decay base.
        
2. **Determine the decay base bb** using the fact that the half-life of cesium-137 is 30 years. Round your answer to 4 decimal places.
    
3. **Predict the cesium-137 concentration in the year 2025.** Round your answer to the nearest whole number.
    
4. **Determine how many years** after 1986 it will take for the cesium-137 concentration to drop below **100 Bq/kg**. Round your answer to the nearest whole number.

## Solution

> [!example]- Show solution
>
> ### **Given:**
>
> - Initial amount: A0=1200Ã¢â‚¬â€°Bq/kgA_0 = 1200 \, \text{Bq/kg}
>
> - Half-life of cesium-137: h=30Ã¢â‚¬â€°yearsh = 30 \, \text{years}
>
> - Exponential decay model:
>
>     A(t)=A0Ã¢â€¹â€¦btA(t) = A_0 \cdot b^t
>
> ---
>
> ### **1. Exponential decay function setup**
>
> We are modeling the amount of cesium-137 as:
>
> A(t)=1200Ã¢â€¹â€¦btA(t) = 1200 \cdot b^t
>
> ---
>
> ### **2. Determine the decay base bb**
>
> We use the fact that:
>
> A(30)=A02A(30) = \frac{A_0}{2}
>
> Substitute into the equation:
>
> 12A0=A0Ã¢â€¹â€¦b30Ã¢â€¡â€™12=b30Ã¢â€¡â€™b=(12)130Ã¢â€°Ë†0.9772\frac{1}{2}A_0 = A_0 \cdot b^{30} \Rightarrow \frac{1}{2} = b^{30} \Rightarrow b = \left(\frac{1}{2}\right)^{\frac{1}{30}} \approx 0.9772
>
> Ã¢Å“â€¦ **Decay base:**
>
> bÃ¢â€°Ë†0.9772b \approx 0.9772
>
> ---
>
> ### **3. Predict the concentration in 2025**
>
> Time since 1986:
>
> t=2025Ã¢Ë†â€™1986=39Ã¢â‚¬â€°yearst = 2025 - 1986 = 39 \, \text{years}
>
> Use the model:
>
> A(39)=1200Ã¢â€¹â€¦(0.9772)39A(39) = 1200 \cdot (0.9772)^{39} A(39)Ã¢â€°Ë†1200Ã¢â€¹â€¦0.3646Ã¢â€°Ë†437.5A(39) \approx 1200 \cdot 0.3646 \approx 437.5
>
> Ã¢Å“â€¦ **Cesium-137 concentration in 2025:**
>
> 438Ã¢â‚¬â€°Bq/kg(roundedÃ‚Â toÃ‚Â nearestÃ‚Â wholeÃ‚Â number)\boxed{438 \, \text{Bq/kg}} \quad (\text{rounded to nearest whole number})
>
> ---
>
> ### **4. When will concentration drop below 100 Bq/kg?**
>
> Solve:
>
> 1200Ã¢â€¹â€¦(0.9772)t<100Ã¢â€¡â€™(0.9772)t<1001200=1121200 \cdot (0.9772)^t < 100 \Rightarrow (0.9772)^t < \frac{100}{1200} = \frac{1}{12}
>
> Take logarithm of both sides:
>
> tÃ¢â€¹â€¦logÃ¢ÂÂ¡(0.9772)<logÃ¢ÂÂ¡(112)Ã¢â€¡â€™t>logÃ¢ÂÂ¡(1/12)logÃ¢ÂÂ¡(0.9772)t \cdot \log(0.9772) < \log\left(\frac{1}{12}\right) \Rightarrow t > \frac{\log(1/12)}{\log(0.9772)} t>Ã¢Ë†â€™1.0792Ã¢Ë†â€™0.0100Ã¢â€°Ë†107.9t > \frac{-1.0792}{-0.0100} \approx 107.9
>
> Ã¢Å“â€¦ **Years until concentration drops below 100 Bq/kg:**
>
> 108Ã¢â‚¬â€°yearsÃ‚Â afterÃ‚Â 1986or2094\boxed{108 \, \text{years after 1986}} \quad \text{or} \quad \boxed{2094}
>

