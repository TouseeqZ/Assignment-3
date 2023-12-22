/* - Develop a program that determines the day of the week. Ask the user for a number (1-7) 
and use nested if statements to print the corresponding day's name.*/
import prompt from 'prompt-sync';
let userinput_day=prompt();
let day_number:number=+userinput_day("Enter day number of week from 1 to 7:");
if (day_number>=1&&day_number<=7){
    if(day_number==1){
        console.log("Monday!");
    }else if(day_number==2){
      console.log("Tuesday!");
    }else if(day_number==3){
        console.log("Wednesday!");
      }else if(day_number==4){
        console.log("Thursday!");
      }else if(day_number==5){
        console.log("Friday!");
      }else if(day_number==6){
        console.log("Saturday!");
      }else if(day_number==7){
        console.log("Sunday!");
      }
}else{
    console.log("Wrong day number !");
}
