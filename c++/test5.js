
let arr=[1,2,3,4]
let len=arr.length
let total=0
for(let i=0;i<len;i++){
    let bag=[]
    let sum=0
    for(let j=i;j<len;j++){
        bag.push(arr[j])
        sum+=arr[j]
        total+=sum
    }
}
console.log(total)