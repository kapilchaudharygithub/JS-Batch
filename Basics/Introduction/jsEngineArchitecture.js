/** JS Engine Architecture
 * 
 * JS Engine takes code as Input and goes through 3 main phases:
 *  1> Parsing--> Break the code into Tokens --->Syntax Parser
 *     |                                        |I/P         |O/P
 *     |                                        |            |
 *     |                                       Code       Abstract Syntax Tree Code (AST)
 *     |                                                  [astexplorer.net]
 *     |      -->Parsing phase passes the AST Code to next phase i.e. Compilation
 *     |   AST Code
 *     |
 * 2>Compilation: Receive AST and  pass to JIT Compilation which is going to look towards
 *                 Interpreting and Compliling
 * 
 *              Most of JS engines have: Just in Time Compilation
 *                                       JIT Compilation
 *                                             |
 *                                             |
 *                         ____________________|__________________
 *                        |                                       |
 *                        |                                       |
 *                    Interpreter                            Compiler
 *                   (Fast Execution                     (More Efficiency)
 *                    More Speed    )
 *   
 *                 Convert high level code     +        Takes help of Compiler to optimize the code.
 *                 to byte code & moves to              Compiler communicates with interpreter & while
 *                 execution step                       the code is being interpreted line by line the
 *                                                      compiler tries to optimize the code as much as 
 *                                                      it can  on the runtime
 *    
 *          ---> It's a multiple phase process
 *  
 *     Some of JS Engines have: Ahead of Time
 *                              AOT
 *                               |
 *                               |
 *          _____________________|____________________
 *         |                                          |
 *         |                                          |
 *      Interpreter                              Compiler
 *                                           
 *                                   Compiler takes a piece of code which is  going to be executed later
 *                                   & try to optimize  it as much as it can . Also it produces  the bytecode
 *                                   which is then goes to execution phase
 * 
 * 
 *     
 * 3> Execution:                       2 Major Components
 *                                    ____________________
 *                                             |
 *                                             |
 *                       ______________________|____________________
 *                      |                                           | 
 *                      |                                           |
 *              Memory Heap                                     CallStack
 * ( Space where memory assigned to variable and functions)
 *                
 *  
 *                    tries to free up memory whenever possible
 *    Memory Heap<------------------------------------------------------------>Garbage Collector
 *                                                                            Uses Mark & Sweep Algo.
 * 
 *                          
 * 
 * -->Compilation and Execution phase works together (Hand to Hand)
 */