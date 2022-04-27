/* let user1 = {
  username: "aya",
  password: "an amazing password",
}; */

//let this.list = [user1];

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
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

const customers = {
  list: [],

  addCustomer: function() {
    const userA = process.argv.slice(2);
    if (userA) {
      let newUser = new User(userA, generatePassword());
      this.list.push(newUser);
    } else {
      console.log("invalid username");
      return;
    }
  },

  printArrayIntoLog: function(){
    for (i = 0; i < this.list.length; i++) {
      console.log(this.list[i]);
    }
    //log users in string from this.list array
    for (const userA of this.list) {
      console.log("username:", userA.username, "|  password:", userA.password);
    }
  }

}

customers.addCustomer();
customers.printArrayIntoLog();

module.exports = customers;








//RECIEVE USER AND ADD USERNAME AND PASSWORD
/* function newUser() {
  const userA = process.argv.slice(2);
  if (userA) {
    let newUser = new User(userA, generatePassword());
    this.list.push(newUser);
  } else {
    console.log("invalid username");
    return;
  }
} */



//print to console all users currently in this.list array
/* function printArrayIntoLog() {
  for (i = 0; i < this.list.length; i++) {
    console.log(this.list[i]);
  }
  //log users in string from this.list array
  for (const userA of this.list) {
    console.log("username:", userA.username, "|  password:", userA.password);
  }
} */

//CONSOLE LOGS FOR CHECKUPS
//console.log("given userA = ");
/* console.log(JSON.stringify(this.list[0])); */
/* console.log('new userA = ', newUser()); */

//EXECUTE FUNCTIONS

