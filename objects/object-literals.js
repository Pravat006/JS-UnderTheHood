// Object Literal

const person = {
    fname: "Pravat",
    lname: "Pravat",
    age: 25,
    contact: "1234567890",
    getName: function () {
        return this.fname + " " + this.lname
    }
}

console.log(person)

/**
 * Disadvantages of Object Literals:
 * 1. Lack of Reusability: Object literals are not reusable. If you need to create multiple objects with the same structure, you have to duplicate the code, which can lead to redundancy and maintenance issues.

 * 2. No Inheritance: Object literals do not support inheritance. You cannot create a new object that inherits properties and methods from an existing object literal.

 * 3. Limited Functionality: Object literals are limited in functionality compared to classes or constructor functions. They cannot have private properties or methods, and they do not support features like getters and setters.

 * 4. Performance Issues: Creating multiple object literals can lead to performance issues, especially if the objects are large or complex. Each object literal creates a new instance in memory, which can consume more resources compared to using prototypes or classes.

 * 5. Difficulty in Managing State: Object literals can make it difficult to manage state in larger applications. As the application grows, it can become challenging to keep track of all the object literals and their relationships.
 */