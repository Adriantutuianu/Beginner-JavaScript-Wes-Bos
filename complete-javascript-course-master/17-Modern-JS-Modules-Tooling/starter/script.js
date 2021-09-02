// Exporting and importing in ES6 Modules
//Importing module
import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

console.log('Importing module');
addToCart('bread', 5);
console.log(addToCart);
console.log(totalQuantity, totalPrice);
