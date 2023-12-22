"use strict";
/* - Write a program that takes temperature and check it.
 If it is cold then suggest the user to wear warm clothes
 and so on according to the weather.*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let userinput_temp = (0, prompt_sync_1.default)();
let weather_temp = +userinput_temp("Enter tempeerature:");
if (weather_temp <= 22) {
    console.log("wear warm clothes!");
}
else {
    console.log("Wear what makes you feel comfortable!");
}
