let user1 = {
  username: "aya",
  password: "an amazing password"
};

let customers = [user1];

class User {
  constructor(username, password){
    this.username = username;
    this.password = password;
  }

}


//GET RESPONSE FROM THE TERMINAL
const givenUser = process.argv.slice(2)[0];

//RECIEVE USER AND ADD USERNAME AND PASSWORD
function newUser(user){
if(user){
    let newUser = new User(user, generatePassword());
    customers.push(newUser);
   }else {
     console.log('invalid username');
     return;
   }
}

//generate password
function generatePassword() {
  let length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

//print to console all users currently in customers array
function printArrayIntoLog(){
for(i = 0; i < customers.length; i++){

 console.log(customers[i]);
 
}
//log users in string from customers array
for (const user of customers){
  console.log('username:', user.username, '|  password:', user.password);
}
}



//CONSOLE LOGS FOR CHECKUPS
console.log('given user = ', givenUser);
/* console.log(JSON.stringify(customers[0])); */
/* console.log('new user = ', newUser()); */


//EXECUTE FUNCTIONS
newUser(givenUser);
printArrayIntoLog();