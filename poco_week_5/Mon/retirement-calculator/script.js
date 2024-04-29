/*
Retirement calculator
Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output as shown in the example that follows on the next slide.


What to do
List inputs, outputs, processes in a text file.
What are the constraints? Any edge case to consider? Note in your text file.
Write the steps of your algorithm in pseudo-code in a second text file.
Write the program in JavaScript. Find out how to get the current year from your computer.
Push all 3 files (1 js and 2 txt) to your Github account.

Example:
What is your age? 25
At what age would you like to retire? 65
You have 40 years left until you can retire.
It's 2020, so you can retire in 2060.
 Your computer knows what the current year is. Figure out how to do that in JavaScript.

*/

const todaysDate = new Date().getFullYear();
let userInputOfCurrentAge = prompt("What is your age?");
let userInputOfRetireAge = prompt("At what age would you like to retire?");
function retirementCalculator(){
    userInputOfCurrentAge = Number(userInputOfCurrentAge);
    userInputOfRetireAge = Number(userInputOfRetireAge);
    if (isNaN(userInputOfCurrentAge) || isNaN(userInputOfRetireAge) || userInputOfCurrentAge === 0 || userInputOfRetireAge === 0){
        console.log("You entered wrong age or text. Enter your age please");
    } else{
        yearsLeft = userInputOfRetireAge - userInputOfCurrentAge;
        retiresDate = todaysDate + yearsLeft;
        console.log(`You have ${yearsLeft} years left until you can retire. It's ${todaysDate}, so you can retire in ${retiresDate}.`);
    }
}

retirementCalculator();