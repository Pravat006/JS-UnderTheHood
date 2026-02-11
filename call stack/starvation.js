console.log("start")

setTimeout(() => {
    console.log("Inside setTimeout")
}, 0)

Promise.resolve().then(() => {
    console.log("Inside the promise queue")
    Promise.resolve().then(() => {
        Promise.resolve().then(() => {
            Promise.resolve().then(() => {
                Promise.resolve().then(() => {
                    Promise.resolve().then(() => {
                    })
                })
            })
        })
    })
})


console.log("end")

//  Starvation occurs when a task is continuously added to the microtask queue, preventing other tasks (like setTimeout callbacks) from being executed. In this example, the promise callback is adding more promises to the microtask queue, creating an infinite loop of microtasks. As a result, the setTimeout callback will never get a chance to execute, leading to starvation of the task queue.