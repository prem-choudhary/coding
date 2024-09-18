 function loginUsermessage(Username = "channu"){
  if(!Username) {
    console.log("Please enter your Username");
    return
  }


    return `${Username} just logged in `

}
   
//    console.log  (loginUsermessage("channu") )
console.log(loginUsermessage()); 
