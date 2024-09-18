// function sayHi (){
//     console.log(name);
//     console.log(age);
//     var name = "Praveen";
//      age = 21;

// }
// sayHi()
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(function() {
            console.log(index);
        }, 10);
    })(i);
}