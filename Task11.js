"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* For user input save o value in variable and use it
or create a function for every program and pass desired
value when u call that function best approach */
function iamfucntion(val) {
    console.log(val * 2);
}
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let userinput_val = (0, prompt_sync_1.default)();
let user_val = +userinput_val("Enter some value:");
iamfucntion(user_val);
