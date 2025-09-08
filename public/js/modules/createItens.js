export function createItenDynamically(desserts){
    desserts.forEach(dessert => {
        console.log(dessert.id);
        console.log(dessert.price);
    }); 
}