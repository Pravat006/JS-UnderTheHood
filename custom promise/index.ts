enum PromiseState {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'

}
type TPromiseResolve<T> = (value: T) => void
type TPromiseReject<T> = (reason: T) => void


type TPromiseExecuter<T, K> = (resolve: TPromiseResolve<T>, reject: TPromiseReject<K>) => void


type TPromiseTenCallback<T> = (value: T | undefined) => void
type TPromiseCatchCallback<K> = (reject: K | undefined) => void

/**
 * A custom implementation of Promise in TypeScript.
 * This implementation supports basic functionalities of a Promise, including:
 * - Resolving with a value
 * - Rejecting with a reason
 * - Chaining with `then` and `catch` methods
 * 
 * The `MyPromise` class maintains an internal state to track whether the promise is pending, fulfilled, or rejected.
 * It also stores the success and failure callback handlers to be executed when the promise is resolved or rejected.
 */
class MyPromise<T, K> {
    /** The current state of the promise */
    private _state: PromiseState = PromiseState.PENDING
    /** Handlers to be called when the promise is fulfilled */
    private _successCallbackHandler: TPromiseTenCallback<T>[] = []
    /** Handlers to be called when the promise is rejected */
    private _failureCallbackHandler: TPromiseCatchCallback<K>[] = []
    /** The value with which the promise was fulfilled */
    private _value: T | undefined = undefined
    /** The reason for which the promise was rejected */
    private _reason: K | undefined = undefined


    /**
     *  Creates a new instance of MyPromise.
     * @param executer The function that is executed immediately by the promise, receiving `resolve` and `reject` functions as arguments.
     */
    constructor(executer: TPromiseExecuter<T, K>) {
        executer(this._promiseResolver.bind(this), this._promiseRejector.bind(this))

    }
    /**
     * Registers a callback to be executed when the promise is fulfilled.
     * @param handlerFn The function to be called when the promise is fulfilled.
     * @returns The current instance of MyPromise for chaining.
     */
    public then(handlerFn: TPromiseTenCallback<T>) {
        if (this._state === PromiseState.FULFILLED) {
            handlerFn(this._value)
        } else {
            this._successCallbackHandler.push(handlerFn)
        }
        return this
    }
    /**
     * Registers a callback to be executed when the promise is rejected.
     * @param handlerFn The function to be called when the promise is rejected.
     * @returns The current instance of MyPromise for chaining.
     */
    public catch(handlerFn: TPromiseCatchCallback<K>) {
        if (this._state === PromiseState.REJECTED) {
            handlerFn(this._reason)
        } else {
            this._failureCallbackHandler.push(handlerFn)
        }
        return this

    }

    private _promiseResolver(value: T) {
        if (this._state === PromiseState.FULFILLED) return
        this._state = PromiseState.FULFILLED
        this._value = value
        this._successCallbackHandler.forEach((cb) => cb(value))

    }
    private _promiseRejector(reason: K) {
        if (this._state === PromiseState.REJECTED) return
        this._state = PromiseState.REJECTED
        this._reason = reason
        this._failureCallbackHandler.forEach((cb) => cb(reason))

    }
}


function customPromise() {
    return new MyPromise<number, string>((resolve, reject) => {
        resolve(1)
    })
}

customPromise().then(() => console.log("custom promise running"))

const wait = (s: number) => new MyPromise<number, number>((res, rej) => {
    setTimeout(() => res(s), s * 1000)
})

wait(3).then((value) => {
    console.log("Promise resolved : ", value)
}).catch((reason) => {
    console.log("Promise Reject: ", reason)
})
