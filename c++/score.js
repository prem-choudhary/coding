
// console.log(1 == '1');  // TRUE

// console.log(0 == false); //TRUE

// console.log(1 == true);  //TRUE



// console.log(1 === '1');  // FALSE

// console.log(0 === false); // FALSE
 
// console.log(1 === true);  // FALSE
  


var pattern = /a*/ 

var testStrings = ["", "a", "aa", "aaa", "bb", "ab", "ba" , "bb"];
testStrings.forEach(function(testString) {
    if (pattern.test(testString)) {
        console.log("'" + testString + "' matches the pattern /a*/");
    } else {
        console.log("'" + testString + "' does not match the pattern /a*/");
    }
});
