const kelvin=293;// temperature in kelvin
let celsius=kelvin -273 ; //since that Celsius is 273 degrees less than Kelvin.

let fahrenheit= celsius * (9/5)+32;

fahrenheit=Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celsius * (33/100)
newton=Math.floor(newton)

console.log(`The temperature is ${newton} in Newton`)
