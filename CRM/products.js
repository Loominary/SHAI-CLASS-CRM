//IMPORTS import {v4 as uuidv4} from 'uuid';

const givenProduct = process.argv.slice(2)[0];

let product1 = {
    name: "An amazing product",
    UUID: "An even amazing-er uuid!",
  };

let orders = [product1];


class Product {
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
  let newProduct = new Product(product, UUIDgenerator());
  orders.push(newProduct);
}

function printProductsFromProductsArray(){
    for(i =0; i < orders.length; i++){
        console.log(orders[i]);
    } // Prints as object 
    for(const product of orders){
        console.log('Product name:', product.name, '| UUID:', product.UUID);
    } //Prints in string
}
console.log("given product is: ", givenOrder);
addProductToArray(givenOrder);
printProductsFromProductsArray();
