const dataPath = './src/data/data.json';

let dessertAddedArray = [];
let totalPrice = 0;

export function pushDessertTotal(dessert){
    dessertAddedArray.push(dessert);
}

export function removeDessertTotal(dessert){
    if (!dessert || !dessert.name) {
        console.warn("Sobremesa inválida ao tentar remover:", dessert);
        return;
    }
    const index = dessertAddedArray.findIndex(item =>
        item.name && item.name.toLowerCase() === dessert.name.toLowerCase()
    );
    if (index !== -1) {
        dessertAddedArray.splice(index, 1);
    }
}

export function getSingleItemId(id){
    return dessertAddedArray.filter(item => item.id === id).length;
}

export function getAddToTotalPrice(){
    totalPrice = dessertAddedArray.reduce((sum, item) => sum + item.price, 0);
    console.log(`Items in the cart: `, dessertAddedArray.length);
    console.log(`Total price: `, totalPrice);
    return totalPrice;
}

export function getRemoveToTotalPrice(){
    totalPrice = dessertAddedArray.reduce((sum, item) => sum + item.price, 0);
    console.log(`Items in the cart: `, dessertAddedArray.length);
    console.log(`Total price: `, totalPrice);
    return totalPrice;
}

export function getDessertName(name){
    return name;
}

export function getDessertPrice(price){
    return price;
}

export function getDessertPriceRemovedAdded(price){
    return dessertAddedArray.filter(item => item.price === price).reduce((sum, item) => sum + item.price, 0);
}

export function getDessertCount() {
    return dessertAddedArray.length;
}

