/* - Write a program that takes temperature and check it.
 If it is cold then suggest the user to wear warm clothes
 and so on according to the weather.*/
  
 import prompt from 'prompt-sync';
  let userinput_temp= prompt();

  let weather_temp:number=+userinput_temp("Enter tempeerature:");

  if (weather_temp<=22){
   console.log("wear warm clothes!");
  }else{
    console.log("Wear what makes you feel comfortable!");
  }