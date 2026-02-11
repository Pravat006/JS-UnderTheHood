// Prototypal inheritance



const p1 = {
    xp1: "inside p1"
};

const p2 = {
    xp2: "inside p2",
    __proto__: p1
}

const p3 = {
    xp3: "inside p3",
    __proto__: p2
}
/**
 * Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, every object has an internal property called [[Prototype]], which can be accessed using the __proto__ property or the Object.getPrototypeOf() method. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).
 * 
 * Prototypal inheritance enables code reuse and allows you to create new objects based on existing ones without having to define a class structure. It is a powerful feature that allows for dynamic behavior and flexibility in JavaScript programming.
 */
