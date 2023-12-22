"use strict";
//- Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function FahrenheitTocelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// For Farenheit
let celciustemp = 25;
let farentemp = celsiusToFahrenheit(celciustemp);
console.log(`Temperature in farenheit is : ${farentemp}`);
// For Celcius
let farenheittemp = 77;
let celsiustemp1 = FahrenheitTocelsius(farenheittemp);
console.log(`Temperature in celcius is : ${celsiustemp1}`);
