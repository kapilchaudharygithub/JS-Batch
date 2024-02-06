/**Why Use a keyword while our work can also be done without using  them
 * 
 * Because Using variables in JS without keyword can cause a lot of problems like:
 * --> Block and Functional Scope
 * --> Execution Context
 * --> Problem of Auto Globals
 * --> Unable to understand wheather a variable is  declaring or reassigning value to it.
 * 
 */

/**1. Declaration */

var myName;

/**2. Initialization/Assigning of values */

myName="Kapil";



/**3. Declaration + Initialization */

var newName="Ravi";


/**4. Reassigning-->Possible*/
//JS variables are dynamic in nature
myName="Dev";
newName="Lav";
myName=1234;
myName=true;
myName="Kush";

/** 5. Re-declaration--->Possible */

var newName="Sachin";




/**6.Accessing variable without assigning value to it */

var myAge;
console.log(myAge);//undefined---> b/c of execution context in first phase all variables are assigned to undefined.



/**7. Accessing variables before declaration portion--->possible */

console.log(newAge); // It also gives  undefined 
var newAge=23;


/**8. Accessing variable without even declaring it--->Error
 * 
 *Uncaught ReferenceError: randomAge is not defined
 * 
*/

// console.log(randomAge)



