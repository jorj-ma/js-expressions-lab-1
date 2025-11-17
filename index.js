//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

// module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
// };


const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

// Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Convert Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// Calculate total temperatures in Fahrenheit and Celsius
const tot_temperature_in_fahrenheit = (day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF) + (celsiusToFahrenheit(day2TempC) + celsiusToFahrenheit(day4TempC) + celsiusToFahrenheit(day6TempC) + celsiusToFahrenheit(day8TempC) + celsiusToFahrenheit(day10TempC) + celsiusToFahrenheit(day12TempC) + celsiusToFahrenheit(day14TempC) + celsiusToFahrenheit(day16TempC) + celsiusToFahrenheit(day18TempC) + celsiusToFahrenheit(day20TempC) + celsiusToFahrenheit(day22TempC) + celsiusToFahrenheit(day24TempC) + celsiusToFahrenheit(day26TempC) + celsiusToFahrenheit(day28TempC) + celsiusToFahrenheit(day30TempC));
const tot_temperature_in_celsius = (fahrenheitToCelsius(day1TempF) + day2TempC + fahrenheitToCelsius(day3TempF) + day4TempC + fahrenheitToCelsius(day5TempF) + day6TempC + fahrenheitToCelsius(day7TempF) + day8TempC + fahrenheitToCelsius(day9TempF) + day10TempC + fahrenheitToCelsius(day11TempF) + day12TempC + fahrenheitToCelsius(day13TempF) + day14TempC + fahrenheitToCelsius(day15TempF) + day16TempC + fahrenheitToCelsius(day17TempF) + day18TempC + fahrenheitToCelsius(day19TempF) + day20TempC + fahrenheitToCelsius(day21TempF) + day22TempC + fahrenheitToCelsius(day23TempF) + day24TempC + fahrenheitToCelsius(day25TempF) + day26TempC + fahrenheitToCelsius(day27TempF) + day28TempC + fahrenheitToCelsius(day29TempF) + day30TempC) 
// Calculate average temperatures in Fahrenheit and Celsius
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30

// Console.log the results for inspection
console.log(`Total Temperature in Fahrenheit: ${tot_temperature_in_fahrenheit}`);
console.log(`Total Temperature in Celsius: ${tot_temperature_in_celsius}`);
console.log(`Average Temperature in Fahrenheit: ${avg_temperature_in_fahrenheit}`);
console.log(`Average Temperature in Celsius: ${avg_temperature_in_celsius}`);

// Uncomment the following lines to export the variables
module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};           