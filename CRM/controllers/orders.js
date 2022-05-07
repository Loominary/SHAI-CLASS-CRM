const givenOrder = process.argv.slice(2)[0];

let order1 = {
    name: "An amazing orderName",
    UUID: "An even amazing-er uuid!",
  };

let orders = [order1];


class Order {
  constructor(name, UUID) {
    this.name = name;
    this.UUID = UUID;
  }
}

//generate a "uuid" (until I understand how to do uuid)
function UUIDgenerator() {
  let length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

//adds product to globat products array
function addProductToArray(product) {
  let newOrder = new Order(product, UUIDgenerator());
  orders.push(newOrder);
}

function printProductsFromProductsArray(){
    for(i =0; i < orders.length; i++){
        console.log(orders[i]);
    } // Prints as object 
    for(const order of orders){
        console.log('Order name:', order.name, '| UUID:', order.UUID);
    } //Prints in string
}
console.log("given product is: ", givenOrder);
addProductToArray(givenOrder);
printProductsFromProductsArray();