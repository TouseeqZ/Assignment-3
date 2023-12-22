/*- Write a program that takes the number of units consumed 
by a user if it is greater than 100 then add 10% tax 
if greater than 200 then add 15% of tax so on up to 
if greater than 500 then add 25% of tax
Where the tax amount will be calculated by the amount of bill.*/
import prompt from 'prompt-sync';

let userinput_units=prompt();
let num_of_units:number=+userinput_units("Enter total number of units consumed:");

if(num_of_units>100&&num_of_units<=200){
    console.log("10% of tax will be added to you bill!");
}
else if(num_of_units>200&&num_of_units<=500){
    console.log("15% of tax will be added to you bill!");
}else if(num_of_units>500){
    console.log("25% of tax will be added to you bill!");
}
else {
    console.log("No tax will be added!");
}