/* == 1. Translate days of the week ==
For each single day of the week log the translated output
e.g. if it is Monday, log "Montag" and so on
Choose any language you like
Try different ways: is it possible with if or switch? ==*/

const day = 'Wednesday';
switch (day) {
    case 'Montag':
        console.log('Montag');
        break;
    case 'Tuesday':
        console.log('Dienstag');
        break;
    case 'Wednesday':
        console.log('Mittwoch');
        break;
    case 'Thursday':
        console.log('Donnerstag');
        break;
    case 'Friday':
        console.log('Freitag');
        break;
    case 'Satuday':
        console.log('Samstag');
        break;
    case 'Sunday':
        console.log('Sonntag');
        break;
    default:
        console.log(`Sorry, it's not the week day.`);
}



/* == 2. Odd / even reporter
Prompt for a number between 0 and 20.
Check if the given number is even or odd.
Report the result to the screen (e.g. "2 is even"). ==*/
function numberReporter(){
    let userInput = prompt('Please enter number between 0 and 20');
    
    userInput = Number(userInput); // number

    if (0 <= userInput && userInput <= 20){
        userInput%2 === 0 
            ? alert(`${userInput} is even`)
            : alert(`${userInput} is odd`);
    }
    else{
        alert('You entered number out of scope. Please make sure that you number is in range from 0 to 20');
    }
}
numberReporter();
/* == 3. Odd / even reporter 2.0
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd.
Report the result to the screen (e.g. "2 is even"). ==*/

function numberReporter2(){
    for (let i=0; i<=20; i++){
        userInput%2 === 0 
        ? alert(`${userInput} is even`)
        : alert(`${userInput} is odd`);

    }      
}
numberReporter2();


/* == 4. Multiplication tables
Prompt for a number between 0 and 10.
Multiply the given number by 9.
Log the result (e.g. "2 * 9 = 18"). ==*/


function multiplicationTables(){
    let userInput = prompt('Please enter number between 0 and 10');
    
    userInput = Number(userInput); // number
    let result = userInput*9;
    if (0 <= userInput && userInput <= 10){       
        alert(`${userInput} * 9 = ${result}`);
    }
    else{
        alert('You entered number out of scope. Please make sure that you number is in range from 0 to 20');
    }
}
multiplicationTables();

/* == 5. Multiplication tables 2.0
Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number by 9.
Log the result (e.g. "2 * 9 = 18"). ==*/
function multiplicationTables2(){
    let userInput = prompt('Please enter number between 0 and 10');
    
    userInput = Number(userInput); // number
    let result = userInput*9;
    if (0 <= userInput && userInput <= 10){       
        alert(`${userInput} * 9 = ${result}`);
    }
    else{
        alert('You entered number out of scope. Please make sure that you number is in range from 0 to 20');
    }
}
multiplicationTables2();

/* Age calculator improved with HTML page
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
*/



function bDayCalc(){
    let futureYearDefault = document.getElementById("future-day").value.toString();
    let birthYear = document.getElementById("b-day").value.split("-").map(Number);
    let futureYear = document.getElementById("future-day").value.split("-").map(Number);


    let age = futureYear[0] - birthYear[0];
    let ageBeforeBD = futureYear[0] - birthYear[0] - 1;
    if (futureYear[0] <= birthYear[0]){
        document.getElementById("future-age").innerText="You entered incorret future date. Enter date later that your B-Day";
        return;
    }
    else{
        let message = (`I will be ${age} in ${futureYearDefault}`);
        if (futureYear[1] < birthYear[1]){
            message = (`I will be ${ageBeforeBD} in ${futureYearDefault}`);
            return document.getElementById("future-age").innerText=message;
        }
        else if (futureYear[1] === birthYear[1]){
           if(futureYear[2] >= birthYear[2]){
            return document.getElementById("future-age").innerText=message;
           }
           else{
            age -=1;
            return document.getElementById("future-age").innerText=message;
           }
        }
        else{
            return document.getElementById("future-age").innerText=message;
        }
          
    }
    
}

// document.getElementById("form").addEventListener("submit", bDayCalc);