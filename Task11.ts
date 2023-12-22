/* For user input save o value in variable and use it 
or create a function for every program and pass desired 
value when u call that function best approach */
function iamfucntion(val:number){
console.log(val*2);
}
import prompt from 'prompt-sync';
let userinput_val=prompt();
let user_val:number=+userinput_val("Enter some value:");
iamfucntion(user_val);