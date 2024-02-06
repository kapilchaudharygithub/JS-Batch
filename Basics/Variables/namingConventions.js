/**Naming Conventions:
 * 
 * Can't use spaces
 * start with a lowerCase letter
 * no number at the beginning
 * 
 * must begin with a letter, underScore or dollar symbol
 */

/**1.  Use Descriptive variable names
 * 
 * Use names that clarly convey the purpose or the content of the variable.
 * 
 * Use Semantic Names:
 *               Choose names based on the meaning of the variable in the
 *               context of your application.
 */

//Bad
x=10;

//Good

numberOfStudents=10;

/** 2.CamelCase:
 * 
 * Start with a lowercase and capitalize the first letter of each subsequent
 * concatenated word. This is common convention in JS.
 */

//Bad;

studencount=10;

//Good

studenCount=10;

/** 3. Avoid Single-letter Names:
 * 
 * Unless the variable  represents a simple loop counter, avoid single-letter
 * variable names. Use bames that provide context.
 * 
 */

//Bad
i=0;

//Good
loopIndex=0;

/** 4. Be Consistent 
 * 
 * Stick to a consistent naming style throughout your codebase
 */

//Bad
numberOfUsers=5;
totalNumberOfPeople=8;


//Good
numberOfUsers=5;
numberOfPeoples=8;


/** 5. Avoid Reserved Words
 * 
 *Do not use JS reserve words as  variable names.

 */

 //Bad
//  new="breand new";

//Good
brandNew="brand new";


/**6. Provide Context for Abbreviations
 * 
 * If you use abbreviations, ensure they are well-known or provide a comment
 * to explain
 * 
 */

//Bad
usrNm="Kapil";

//Good
userName="Kapil";

/**7. Use plural for collections
 * 
 * When a variable represents a collection, use a plural form.
 *  
 */


//Bad
numberOfUser=7;

//Good
numberOfUsers=7;







