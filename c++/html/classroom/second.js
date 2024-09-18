// // var num = 10;
// // if (num > 0) {
// //   console.log("Positive");
// // } else if (num < 0) {
// //   console.log("Negative");
// // } else {
// //   console.log("Zero");
// // }

// // for (var i = 0; i < 5; i++) {
// //   console.log(i);
// // }


var i = "prem choudhary" - "rahul choudhary";  // why this nan i don't know 
console.log(i);

// // var i = 50/2
// // console.log(i);


// // var x = 5;
// // var y = 5;
// // console.log(x == y); 

// // var x = 5;
// // var y = 10;
// // console.log(x != y);

// // var x = 5;
// // var y = "5";
// // console.log(x === y);

// // var x = 5;  
// // var y = "5";
// // console.log(x !== y)




// // var num = 10;
// // var str = "Hello";
// // var bool = true;
// // var arr = [1, 2, 3];
// // var obj = { key: "value" };



// var sum = 5 + 3;
// var isTrue = (5 > 3) && (10 < 20);

// console.log(sum , + isTrue)
// console

// console.log("prem choudhary")

// JavaScript code to greet the user
function greetUser() {
    // Get the current date and time
    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    // Greet the user based on the time of day
    if (currentHour < 12) {
        return "Good morning!";
    } else if (currentHour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

// Call the greetUser function and display the greeting
var greeting = greetUser();
console.log(greeting);

  