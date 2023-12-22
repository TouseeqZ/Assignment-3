/* Write a program that calculates the discount for a product based on its price. 
If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount. */
import prompt from 'prompt-sync';

// Function to calculate discount
function calculateDiscount(originalPrice: number, discountPercentage: number): number {
    const discountAmount: number = originalPrice * (discountPercentage / 100);
    const discountedPrice: number = originalPrice - discountAmount;
    return discountedPrice;
}
// Create a prompt function
let userinput_price= prompt();
let price:number=+ userinput_price("Enter price:");

if(price>100){

    console.log(`You will be given 10% discount !. The total amount will be ${calculateDiscount(price,10)}`);
}else {
    console.log(`You will be given 5% discount !. The total amount will be ${calculateDiscount(price,5)}`);
}

