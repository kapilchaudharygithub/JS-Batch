/**Exexution Context
 * 
 * Everything in JS happens inside an execution context.
 * 
 * It has 2 major componenets
 *     
 * Memory/Variable Component                                         Code Component/Thread Of execution
 * 
 * also known as Parsing/Creation Phase                              Also known as Execution Phase
 * Storing variable and functions in key-value pairs                 Place where code is executed one line a a time
 *                                                                   (Synchronous and single threaded-->One line at  a time in specific order) 
 *
 * Firstly check Formal Declaration(var,let,const,function) 
 * 
 * and assign                                                         assign actual values                                                                                 
 * variables-->undefined
 * functions-->entire function                                        If it is a function the nrew execution context is created
 *                                                                    If function returning something then 
 *                                                                    return-->States that the control of program where function was invked
 *                                                                       
 *                               
 *                          After completion of code Global execution context is deleted.  
 *                                             
 * 
 */

/**What happens when you run a JS program ?
 * 
 * An Execution context is created.
 * 
 * Firstly Global Execution Phase is Created
 */

