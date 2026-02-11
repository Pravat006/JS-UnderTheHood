console.log("start")

setTimeout(() => {
    console.log("Inside setTimeout")
}, 0)

// Promise is a part of the microtask queue, which has higher priority than the macrotask queue (where setTimeout callbacks are placed). This means that the promise callback will be executed before the setTimeout callback, even if both are scheduled to run after the current code execution.
Promise.resolve().then(() => {
    console.log("Inside the promise queue")
})

console.log("end")

/**
 * Task queue (macrotask queue) vs Microtask queue:
 * 
 * 1. The task queue (also known as the macrotask queue) is where tasks like setTimeout callbacks, setInterval callbacks, and I/O events are placed. These tasks are executed after the current code execution and any microtasks have been completed.
 * 
 * 2. The microtask queue is where tasks like promise callbacks (then, catch, finally) and process.nextTick (in Node.js) are placed. These tasks are executed immediately after the current code execution and before any tasks in the task queue.
 * 
 * 3. When the JavaScript engine finishes executing the current code, it first checks the microtask queue and executes all tasks in that queue before moving on to the task queue. This is why the promise callback is executed before the setTimeout callback in this example.
 * 
 * 4. This behavior ensures that promises are handled as soon as possible, allowing for more efficient handling of asynchronous operations and better performance in scenarios where multiple asynchronous tasks are involved.  
 */

/*
* Task queue  example:
* SetTimeout, setInterval, I/O events, UI rendering, etc. are examples of tasks that are placed in the task queue (macrotask queue). These tasks are executed after the current code execution and any microtasks have been completed.

* Microtask queue example:
* Promise callbacks (then, catch, finally) and process.nextTick (in Node.js) are examples of tasks that are placed in the microtask queue. These tasks are executed immediately after the current code execution and before any tasks in the task queue.
*/