// Exporting and importing in ES6 Modules
//Importing module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js'; //import default export- any name
add('pizza', 2);
