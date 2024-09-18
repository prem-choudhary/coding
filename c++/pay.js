const shoppingCart = [
    {
        itemname: "js course",
        price : 1000
    },
    {
        itemname: "py course",
        price : 999
    },
    {
        itemname: "moblie dev course",
        price : 12000
    },
    {
        itemname: "data science course",
        price : 80000
    },
]
 const pricetopay = shoppingCart.reduce( (acc, item) => acc+  item.price,  0 )
console.log (pricetopay)