
  const arr = [1 , 2 , 3 ,4 ]
  for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello world"
for (const greet of greeting) {

    // console.log(`Each char is ${greet}`);
    
}


// Mapp ++*+--/++7----/*+

const map = new Map ()
 map.set('IN',"india")
 map.set('IN',"india")
 map.set('SL',"srilanka")
 map.set('NEP', "nepal")

//  console.log(map);

for (const [key,value] of map) {
    // console.log(key, ":-" ,value);
}
const myobject = { 
js: "javascript",
cpp: "C++ ",
rb : "ruby",
swift : "swift by apple"
}
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}






