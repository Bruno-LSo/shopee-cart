//quais ações meu carrinho pode fazer

// CASOS DE USO
// -> adicionar item
async function addItem(userCart, item) {
    userCart.push(item)
}


// -> deletar um item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}
// -> remover um item
async function removeItem(userCart, item) {
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
  
    //2. Caso não encontre o item
    if (indexFound == -1) {
      console.log("item não encontrado");
      return;
    }
  
    //3. item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity -= 1;
      return;
    }
  
    //4. caso item = 1 deletar o item
    if (userCart[indexFound].quantity == 1) {
      userCart.splice(indexFound, 1);
      return;
    }
}


// -> calcula total
async function calculateTotal(userCart) {
    console.log("Shopee cart total: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💵 ${result}`);
}

async function displayCart(userCart) {
    console.log("\n🛍️  Shopee cart: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Quantidade: ${item.quantity} | Subtotal: ${item.subtotal()}`);
    });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };