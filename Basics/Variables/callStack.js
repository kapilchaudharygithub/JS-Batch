/**               Call/Program/Runtime/Machine/Execution Context Stack
 * 
 * 
 * used to handling everything to manage exeecutinon context.
 * 
 * managing--->creation, deletion, control is being managed by callStack
 * 
 * 
 * Global Execution Context is pushed in the bottom of Stack.
 * 
 * 
 * Whenever a function is executed or new execution context is created  it pushes that in call stack &
 * popped out after completion  & again control goes back to Global Execution Context  where it left previously
 * & Global execution Context also popped out after completion of JS code.
 * 
 * 
 * 
 * 
 * Call Stack maintains the order of execution Execution context
 * 
 */