# Temperature Converter

## Overview
This project is a simple JavaScript program that converts temperatures from Kelvin to Celsius, Fahrenheit, and Newton. It demonstrates basic mathematical operations and fundamental JavaScript concepts like variables, arithmetic calculations, and template literals.

The concept is inspired by Kelvin, a fictional mad scientist who publishes weather forecasts in Kelvin on his website. This program addresses the issue by converting Kelvin temperatures to more commonly used units.

---

## Features
- Converts Kelvin to Celsius.
- Converts Kelvin to Fahrenheit.
- Converts Kelvin to Newton.
- Rounds down results to the nearest whole number.

---

## How It Works
The program performs the following steps:
1. Accepts a temperature in Kelvin.
2. Converts the Kelvin temperature to Celsius using the formula:
   ```
   Celsius = Kelvin - 273
   ```
3. Converts Celsius to Fahrenheit using the formula:
   ```
   Fahrenheit = Celsius * (9/5) + 32
   ```
4. Converts Celsius to Newton using the formula:
   ```
   Newton = Celsius * (33/100)
   ```
5. Outputs the results in all three scales.

---

## Code Example
```javascript
// The temperature in Kelvin (constant value provided by Kelvin)
const kelvin = 293; // Example: 293 K

// Convert Kelvin to Celsius
let celsius = kelvin - 273;
// Celsius is always 273 degrees less than Kelvin

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Fahrenheit formula: °F = °C × (9/5) + 32

// Round Fahrenheit down to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

// Log the Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton
let newton = celsius * (33/100);
// Newton formula: °N = °C × (33/100)

// Round Newton down to the nearest whole number
newton = Math.floor(newton);

// Log the Newton temperature
console.log(`The temperature is ${newton} degrees Newton.`);
```

---

## Example Output
For an input of `kelvin = 293`:
- **Celsius:** 20 °C
- **Fahrenheit:** 68 °F
- **Newton:** 6 °N

---

## Technologies Used
- **JavaScript:** The entire program is written in vanilla JavaScript.

---

## Key Concepts Learned
1. **Temperature Conversion Formulas:**
   - Kelvin to Celsius: `Celsius = Kelvin - 273`
   - Celsius to Fahrenheit: `Fahrenheit = Celsius * (9/5) + 32`
   - Celsius to Newton: `Newton = Celsius * (33/100)`
2. **Math.floor():** Used to round numbers down to the nearest integer.
3. **Template Literals:** Enabled dynamic outputs using backticks (``) and `${}`.
4. **Variables:** Utilized `const` for constants and `let` for changeable values.

---

## How to Run the Project
1. Copy the code to a JavaScript environment (browser console, Node.js, or an online editor like Replit).
2. Modify the `kelvin` constant to test with different temperatures.
3. Run the program and observe the converted values in the console.

---

## Fun Fact
The Newton temperature scale was created by Sir Isaac Newton and is rarely used today. It’s fascinating to see how it compares to the more widely used Fahrenheit and Celsius scales.

---

## Reflection
This project was an excellent opportunity to reinforce JavaScript basics and explore temperature conversion formulas. It's a beginner-friendly project that lays the foundation for understanding dynamic calculations and programmatic outputs.

