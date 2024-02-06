/**Problems With Var
 * 
 * Re-declaration
 * Unintended Hoisting
 * scope clarity--> might lead to scope confusion in loop
 * 
 */

/** Introducing Let  to resolve all problems */


/**1. Declaration*/
let myName;

/**2. Initiliazation */

myName="Kapil";


/**3. Declaration + Initialization  */

let newName="Ravi";

/** 4. Reassigning-->Possible*/
myName="Dev";

/** 5. Redeclaration--->Error
 * 
 * Uncaught SyntaxError: Identifier 'newName' has already been declared
 */

// let newName="Amit";


/** 6. Accessing Variable without  assigning value to it--->Possible*/

let randomAge;

// console.log(randomAge)//undefined


/** 7. Accessing Variabe before declaration portion--->Error
 * 
 * Uncaught ReferenceError: Cannot access 'randomName' before initialization
 */

// console.log(randomName)//reference Error
let randomName="random";


/** 8.Accessing variable without even declaring it--->Error
 * 
 * Uncaught ReferenceError: randomData is not defined
  */

// console.log(randomData)



