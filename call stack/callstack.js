console.log("start")

setTimeout(() => {
    console.log("Inside setTimeout")
}, 0)

console.log("end")

/**
 * 1 st the global execution context starts and the code is executed in a single pass.
 * 2 nd the setTimeout function is called, which schedules the callback function to be executed after a specified delay (0 milliseconds in this case).
 * 3 rd the "start" message is printed to the console.
 * 4 th the "end" message is printed to the console.
 * 5 th after the specified delay, the callback function inside setTimeout is executed, printing "Inside setTimeout" to the console.
 *  */

/**
 * NOTE:
 * 1. The setTimeout function is a Web API provided by the browser, and it allows you to schedule a function to be executed after a specified delay. When setTimeout is called, it registers the callback function to be executed after the specified time has elapsed.
 * 
 * 2. The JavaScript engine continues executing the rest of the code while waiting for the timer to expire. This is why "start" and "end" are printed before "Inside setTimeout".
 * 
 * 3. The callback function passed to setTimeout is placed in the event queue, and it will only be executed after the current call stack is empty and the specified delay has passed.
 * 
 * 4. Even if the delay is set to 0 milliseconds, the callback function will still be executed asynchronously, meaning it will be placed in the event queue and executed after the current code has finished executing.
 * 
 * 5. This behavior demonstrates how JavaScript handles asynchronous operations and the event loop, allowing for non-blocking execution of code while waiting for events or timers to complete.
 * 
 * 6. The event loop continuously checks the call stack and the event queue. If the call stack is empty, it will take the first callback function from the event queue and push it onto the call stack for execution.
 * 
 * 7. This mechanism allows JavaScript to handle multiple tasks concurrently without blocking the main thread, making it suitable for tasks like handling user interactions, making network requests, and performing time-consuming operations without freezing the user interface.
 * 
 */