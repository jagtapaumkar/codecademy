// Declare your age
var myAge = 22;

// Calculate the early years (first 2 years count as 10.5 dog years each)
let earlyYears = 2;
earlyYears = 10.5 * earlyYears;

// Calculate the later years (remaining years count as 4 dog years each)
let laterYears = myAge - 2;
laterYears = laterYears * 4;

// Add early years and later years to find the total age in dog years
var myAgeInDogYears = earlyYears + laterYears;

// Store the name and convert it to lowercase
var myName = 'Aumkar';
myName = myName.toLowerCase();

// Output the result
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
