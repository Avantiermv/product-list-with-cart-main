import fs from 'fs';

const dataPath = './src/data/data.json';

let dessertAddedArray = [];

export function pushDessertTotal(dessert){
    dessertAddedArray.push(dessert);
    console.log("total de items: ", dessertAddedArray.length);
}

export function removeDessertTotal(dessert){
    const index = dessertAddedArray.findIndex(item => item.name.toLowerCase() === dessert.name.toLowerCase());
    if(index !== -1){
        dessertAddedArray.splice(index, 1);
    }
    console.log("total de items: ", dessertAddedArray.length);
}

export function getSingleItemId(id){
    return dessertAddedArray.filter(item => item.id === id).length;
}

export function getDessertCount() {
    return dessertAddedArray.length;
}
