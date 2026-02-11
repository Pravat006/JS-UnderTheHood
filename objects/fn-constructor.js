//  Constructor function 
//  a normal function naming conventionally starts with camelCase
// a constructor function starts with a capital letter (PascalCase)

//  because before ES6 we don't have class keyword, so we use function constructor to create objects and implement inheritance. But after ES6 we have class keyword which provides a more elegant and cleaner syntax for creating objects and implementing inheritance, so the use of function constructors has become less common in modern JavaScript development.

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.getDetails = function () {
//         return this.name + " is " + this.age + " years old."
//     }
// }

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getDetails() {
        return this.name + " is " + this.age + " years old."
    }
}

const person1 = new Person("Pravat", 25)
const person2 = new Person("John", 30)

console.log(person1.getDetails()) // Pravat is 25 years old.
console.log(person2.getDetails()) // John is 30 years old.

/**
 * Advantages of Constructor Functions:
 * 1. Reusability: Constructor functions allow you to create multiple instances of an object with the same structure and behavior, promoting code reusability.

 * 2. Inheritance: Constructor functions can be used in conjunction with prototypes to enable inheritance, allowing objects to share properties and methods.

 * 3. Encapsulation: Constructor functions can encapsulate data and behavior, providing a clear structure for creating objects.

 * 4. Memory Efficiency: When using prototypes, methods defined on the prototype are shared among all instances, reducing memory consumption compared to defining methods within the constructor function.

 * 5. Clarity and Organization: Using constructor functions can improve code clarity and organization, especially in larger applications where multiple object types are needed.
 */

