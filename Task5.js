"use strict";
/* - Create a program that determines the category of a user-provided age.
 If the age is between 0 and 12, print "Child." If it's between 13 and 19,
  print "Teenager." Otherwise, print "Adult." */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let userinput_age = (0, prompt_sync_1.default)();
let user_age = +userinput_age("Enter your age:");
console.log(user_age);
if (user_age > 0 && user_age <= 12) {
    console.log("Child!");
}
else if (user_age >= 13 && user_age <= 19) {
    console.log("Teenager!");
}
else {
    console.log("Adult!");
}
