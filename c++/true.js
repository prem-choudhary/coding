 const Emailuser = "prem@choudhary"
  
 if (Emailuser) {
    console.log("Got user name");
    
 }else {

    console.log("dont't have user Email");
 }
  

 const emptyObj =  {}
   
 if (Object.keys (emptyObj).length===0 ) {

   console.log("Object is empty");
   
 }

 let prem;
 prem = null ??  10 
 prem2 = 10 ?? 20 
 prem3 = undefined ?? 10 
 prem4 = null ?? 5 ?? undefined
 prem5 = null ?? undefined
 prem6 = undefined ?? null

console.log(prem6);