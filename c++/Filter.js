const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13, 14, 15, 16, 17, 18, 19, 20] 
 
const newName = myNums.filter( (num)  => num>0)

// const newName = myNums.filter ( (num) => {
//        return num > 4
// } )
// console.log(newName);



const newNums  = []
 myNums.forEach(  (num) =>{
if (num>4) {
    newNums.push(num)
}
 })

 console.log(newNums);


