// Welcome to our JavaScript journey! Today, we're going to explore a crucial concept - Variables.

/** What is Variables
 * Imagine JavaScript as a language that helps computers understand and execute instructions.
* Variables are like containers that hold information for our programs.
 */


/** What we learn Previously
 // Before we dive into variables, let's talk about what we've done so far - console logging.

  console.log("Hello, JavaScript!"); // Simple, right?

 Console logging is like talking to the computer, telling it what to display.


 // But, what if we want to use this message again and again?

 * 
 * 
 */



 /**The Need for Reusability:
//    Imagine we're creating a story. We want to introduce a character named John.


    console.log("Once upon a time, there was a character named John.");
   console.log("John lived in a small village.");

    // Great! But what if we want to change the character's name later? We'd have to find and replace every occurrence.

  */  



/**  Introducing Variables:
 // This is where variables come to the rescue! They allow us to store information and use it throughout our program.

characterName = "John";

console.log(`Once upon a time, there was a character named ${characterName}.`);
console.log(`${characterName} lived in a small village.`);

// Now, if we want to change the character's name, we only have to do it in one place!
 */


/**Example:1 Score Keeping
 // Let's consider a game. We need to keep track of the player's score.

playerScore = 0;

console.log(`Player Score: ${playerScore}`);

// As the player progresses, we can update the score easily.
playerScore += 10;
console.log(`Player Score: ${playerScore}`);

 */


/**Example:2 User Input
// Suppose we're creating a website that asks for the user's name.

let userName = prompt("What's your name?");
console.log(`Hello, ${userName}!`);

// Now, we can use the entered name throughout the program.

 */


/**Dynamic Typed
 * 
 * Variables in JS are Dynamic typed
 * 
 * Dynamic types: Allows you to declare a variable without specifying what type of variable is
 */