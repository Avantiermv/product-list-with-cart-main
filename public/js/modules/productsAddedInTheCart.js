


let dessertAdded = [];

export function addDessert(dessert){
    dessertAdded.push(dessert);
    console.log(dessertAdded)
}

export function removeDessert(dessert){
    dessertAdded.pop();
}