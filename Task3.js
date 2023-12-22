"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* - Write a program that converts given number of days in to weeks and days such as
17 days = 2 weeks and 3 days.*/
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Create a prompt function
let userinput_days = (0, prompt_sync_1.default)();
let number_of_days = +userinput_days("Enter number of days : ");
let int_no_of_days = number_of_days / 7;
let int_weeks = int_no_of_days | 0;
console.log(`The number of weeks are ${int_weeks} , and days are ${number_of_days % 7}`);
