// makiing a class in js creates a Student prototype and the constructor function is called when we create an instance of the class using the new keyword. The methods defined in the class are added to the prototype of the class, which allows all instances of the class to share those methods. This is a more efficient way to create objects and manage memory compared to using object literals or constructor functions without prototypes.
class Student {
    constructor(name) {
        this.name = name;
    }

    getDetails() {
        return `Name: ${this.name}`;
    }
}


// when we create an instance of the Student class using the new keyword, it creates a new object and sets its prototype to Student.prototype. This means that s1.__proto__ is equal to Student.prototype, which allows s1 to access the getDetails method defined in the Student class through the prototype chain.
const s1 = new Student("pravat");

// when we create an object s2 using Object.create(Student.prototype), it creates a new object with its prototype set to Student.prototype. This means that s2 can also access the getDetails method defined in the Student class through the prototype chain, even though s2 itself does not have a name property or a constructor function. However, since s2 does not have a name property, calling s2.getDetails() will return "Name: undefined" because it tries to access the name property on s2, which does not exist.
const s2 = {
    __proto__: Student.prototype
}