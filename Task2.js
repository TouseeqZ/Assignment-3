"use strict";
// - Write a program that calculates the percentage.
function percentage_cal(part, whole) {
    return (part / whole) * 100;
}
let part = 40;
let whole = 200;
let percentage_result = percentage_cal(part, whole);
console.log(`The percentage for ${part} is ${percentage_result}`);
