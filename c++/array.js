let myArray = [1 , 2 , 3 , 4 , 5 , 6];


console.log(myArray[0]);
console.log(myArray[2]);

//  Modifying an element

myArray[1] = 10;

console.log(myArray);


//  Adding elements to the array

myArray.push(7);
console.log(myArray);


//  Removing elements from the array

myArray.pop();
console.log(myArray);   


var person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

var john = new Person("John", 30);
john.greet();




