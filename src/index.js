import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = [];
const myWishList = [];

console.log("Welcome to your shopee cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

//Adicionei dois itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//Remover item do carrinho
await cartService.removeItem(myCart, 1);
await cartService.removeItem(myCart, 2);
await cartService.removeItem(myCart, 2);

//Mostrei o carrinho
await cartService.displayCart(myCart);

//Deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

//Total do carrinho

await cartService.calculateTotal(myCart);
