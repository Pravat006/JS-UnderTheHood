// prototype chain 

const x = "pravat"

console.log(x.__proto__) // String.prototype
console.log(x.__proto__.__proto__) // Object.prototype
console.log(x.__proto__.__proto__.__proto__) // null

// end of the prototype chain will always be null, which indicates that there are no more objects to look up in the chain.
//  prototype of Objects is null, which means that they do not inherit from any other object. This is because they are the top-level objects in the prototype chain. When you create an object using an object literal or a constructor function, it inherits from Object.prototype, which is the prototype of all objects in JavaScript. However, Object.prototype itself does not have a prototype, so its __proto__ property is null.

// everything in javascript originates from Object.prototype, which is the root of the prototype chain. When you create an object, it inherits properties and methods from Object.prototype through the prototype chain. This means that all objects in JavaScript have access to the properties and methods defined on Object.prototype, such as toString(), hasOwnProperty(), etc. The prototype chain allows for code reuse and enables objects to share behavior without having to define it on each individual object.

/**
 * The prototype chain is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).
 * 
 * In the example above, we have a string primitive "pravat". When we access the __proto__ property of the string, we get String.prototype, which contains methods like toUpperCase(), toLowerCase(), etc. If we access __proto__ again, we get Object.prototype, which is the top-level prototype that all objects inherit from. Finally, if we access __proto__ one more time, we get null, indicating that we've reached the end of the prototype chain.
 */