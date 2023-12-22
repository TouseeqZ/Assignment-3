"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Write a program that calculates the discount for a product based on its price.
If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount. */
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Function to calculate discount
function calculateDiscount(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}
// Create a prompt function
let userinput_price = (0, prompt_sync_1.default)();
let price = +userinput_price("Enter price:");
if (price > 100) {
    console.log(`You will be given 10% discount !. The total amount will be ${calculateDiscount(price, 10)}`);
}
else {
    console.log(`You will be given 5% discount !. The total amount will be ${calculateDiscount(price, 5)}`);
}
