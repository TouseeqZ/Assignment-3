"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// - Write a program that checks if the given year is leap year or not.
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let userinput_year = (0, prompt_sync_1.default)();
let year = +userinput_year("Enter year:");
if (isLeapYear(year)) {
    console.log(`${year} is a leap year!`);
}
else {
    console.log(`${year} is not a leap year!`);
}
