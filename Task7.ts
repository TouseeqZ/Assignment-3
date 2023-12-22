/* - Write a program that checks if the given number is  divisible by 3 or 5 or both 
or not divisible by anyone show output accordingly.*/

import prompt from 'prompt-sync';

let userinput_num=prompt();
let user_num:number=+userinput_num("Enter some number:");

if(user_num%3==0&&user_num%5==0){
 console.log("Divisible by 3 and 5!");
}else if(user_num%5==0){
    console.log("Divisible by 5!");

}else if(user_num%3==0){
    console.log("Divisible by 3!");

}else {
    console.log("not divisible by any!");
}