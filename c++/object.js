// let person = {
//     firstName: 'praveen',
//     lastName: 'Choudhary',
//     age: 21,
//     isStudent: true,
//     address: {
//       street: '123 Main St',
//       city: 'surat',
//       zipCode: '12345'
//     },
//     sayHello: function() {
//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    
  // };
        //  let myname = praveen 
        //  let lastName= choudhary
        //  console.log(myname,lastName);

        let person = {
          firstName: 'praveen vinu ',
          lastName: 'Choudhary',
          age: 21,
          isStudent: true,
          address: {
            street: '123 Main St',
            city: 'surat',
            zipCode: '12345'
          },
          sayHello: function() {
            console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
          }
        };
        
        
        let myname = person.firstName;
        
        let lastName = person.lastName;
        
        
        console.log(myname, lastName); 