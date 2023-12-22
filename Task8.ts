// - Write a program that checks if the given year is leap year or not.
import prompt from 'prompt-sync';

function isLeapYear(year: number): boolean {
    // Check if the year is divisible by 4
if (year%4==0&&year%100==0&&year%400==0){
    return true;
} else{
    return false;
}

}
 let userinput_year=prompt();
 let year:number=+ userinput_year("Enter year:");

 if(isLeapYear(year)){
    console.log(`${year} is a leap year!`);
 }else{
    console.log(`${year} is not a leap year!`);
 }
