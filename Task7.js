"use strict";
/* - Write a program that checks if the given number is  divisible by 3 or 5 or both
or not divisible by anyone show output accordingly.*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let userinput_num = (0, prompt_sync_1.default)();
let user_num = +userinput_num("Enter some number:");
if (user_num % 3 == 0 && user_num % 5 == 0) {
    console.log("Divisible by 3 and 5!");
}
else if (user_num % 5 == 0) {
    console.log("Divisible by 5!");
}
else if (user_num % 3 == 0) {
    console.log("Divisible by 3!");
}
else {
    console.log("not divisible by any!");
}
