const Product = require("./product.js");
const ShoppingCart = require("./shop");
const User = require("./user");

let product = new Product("Macbook", "smart", "1500$" );
let shoppingCart = new ShoppingCart();
let user = new User(shoppingCart);
console.log(user.shoppingCart.addToShoppingCart(product));