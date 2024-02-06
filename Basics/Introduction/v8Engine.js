/**V8 Engine
 * 
 * Fastest among current engines  uses:
 *   
 * Ignition : Interpreter
 * Tubo Fan : Optimizing Compiler (Compiler)
 * Orinocco/ : Garbage Collector
 * OilPam
 * 
 * 
 */


/**Architecture
 *     JS Source Code------------------>Parser
 *                                       |
 *                                       |
 *                                       |
 *  Interpreter<----------------------- AST
 *       |
 *       |-------------------->
 * ______|                    |
 * Compiler                   Bytecode
 *    |                        ^
 *    |                        |
 *    |                        |
 * Optimized Machine Code------|
 */   