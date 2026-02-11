console.log("Global execution context starts")

var globalVars = "Global variable"
globalFn()

function globalFn() {
    console.log("Inside global function ")
}

console.log(globalVars)

console.log("Global execution context ends ")

/**
 * 1 st the globalVars loaded in memory as undefined
 * 2 nd the whole globanFn loaded in memory phase as function globalFn() {
    console.log("Inside global function ")
}
 */

/**
 * code phase:
 * 1 st the globalVars assigned with "Global variable"
 * 2 nd the globalFn invoked and print "Inside global function "
 * 3 rd the globalVars print "Global variable"
 * 4 th the global execution context ends
 *  
 * */

/**
 * NOTE: 
 * 1.In the global execution context, the entire code is executed in a single pass. The variable declarations are hoisted to the top of the scope, but their assignments are not. Function declarations are also hoisted, meaning they are available throughout the entire scope.
 * 
 * 2. When the JavaScript engine encounters a variable declaration, it allocates memory for that variable and initializes it with a default value (undefined). However, the assignment of the actual value to the variable happens during the code execution phase.
 * 
 * 3. Function declarations are hoisted in their entirety, meaning that the entire function definition is available before any code is executed. This allows you to call a function before it is defined in the code.
 * 
 * 4. The global execution context is created when the JavaScript engine starts executing the code. It is the default context in which all code runs unless a new execution context is created (e.g., when a function is called).
 * 
 * 5. The global execution context has access to global variables and functions, and it serves as the base context for all other execution contexts created during the program's execution.
 * 
 * 6. Each time a function is called, a new execution context is created for that function, which has its own variable environment and scope. The global execution context remains active until the program finishes executing.
 * 
 */