const myNums = [ 1, 2, 3, 4, 5, 6, ]

 const mytotal = myNums.reduce(function (acc,currval) {
  console.log(`acc: ${acc} and curral: ${currval}`);

    return  acc + currval
} , 3) 

// const mytotal = myNums.reduce( (acc,curr) => acc + curr,  0  )
// console.log(mytotal);
[1, 100].reduce((ac,curr)=>Math.max(ac,curr), 50); // 100