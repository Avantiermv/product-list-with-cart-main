import fs from 'fs';
const dataPath = './src/data/data.json';

let dessertAdded = [];

export function pushDessertTotal(dessert){
    dessertAdded.push(dessert);
    console.log("Total items: ", dessertAdded.length);
}

export function removeDessertTotal(dessert){

    const index = dessertAdded.findIndex(item => item.name.toLowerCase() === dessert.name.toLowerCase());
    if(index !== -1){
        dessertAdded.splice(index, 1);
    }
    console.log("Total items: ", dessertAdded.length);
}

export function getAllDesserts() {
    const raw = fs.readFileSync(dataPath);
    return JSON.parse(raw);
}