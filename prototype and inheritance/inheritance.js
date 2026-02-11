const p1 = {
    fname: "Pravat",
    lname: "Pravat",
    age: 25,
    contact: "1234567890",
    getName: function () {
        return this.fname + " " + this.lname
    }
}

const p2 = Object.create(p1)
console.log(p2)

console.log("p1 is ", p1)

p2.__proto__.fname = "John"

console.log("p1 after is", p1.fname)
