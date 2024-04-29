/* Say hello
Create a program in JavaScript that prompts for your name and prints a greeting using your name. */
function welcomeMessage(){
    let userName = prompt("Enter your name");
    let message = (`Hi ${userName}!`);
    return message;
}
console.log(welcomeMessage());


/* Counting the number of characters
Create a program in JavaScript that prompts for an input string and displays output that shows the input string and the number of characters the string contains.*/

function numberOfCharacters(){
    let userInput = prompt("Enter string");
    return userInput.length;
}
console.log(numberOfCharacters());

/* Printing quotes
Create a program that prompts for a quote and an author. Display the quotation and author as shown here:
[Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values*/

function quoteWithAuthor(){
    let userQuote = prompt("Enter a quote");
    let userAuthor = prompt("Enter an author");
    let message = (`${userAuthor} says, \"${userQuote}\"`);
    return message;
}
console.log(quoteWithAuthor());

/* Age calculator
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
*/

function bDayCalc(){
    let birthYear = prompt("Enter your birth year");
    let futureYear = prompt("Enter a future year");
    if (futureYear > birthYear){
        age = futureYear - birthYear;
        let message = (`I will be either ${age-1} or ${age} in ${futureYear}`);
        return alert(message);
    }
    else{
        alert("Enter the future date year other that your B-Day year");
        bDayCalc();
    }
}
console.log(bDayCalc());

