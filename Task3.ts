/* - Write a program that converts given number of days in to weeks and days such as 
17 days = 2 weeks and 3 days.*/
import prompt from 'prompt-sync';
// Create a prompt function
let userinput_days= prompt();
let number_of_days:number=+userinput_days("Enter number of days : ");
 let int_no_of_days=number_of_days/7;
 let int_weeks:number= int_no_of_days |0;
console.log(`The number of weeks are ${int_weeks} , and days are ${number_of_days%7}`);





