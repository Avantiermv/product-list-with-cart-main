
const meusItens = [
    {
        name: "Baldurs gate",
        price: 3
    },
    {
        name: "Residencia Maldita 4",
        price: 4
    },
    {
        name: "IFMA",
        price: 2.50
    }
]


let totalPreço = meusItens.reduce(somarTodosOsItensDoArray, 0);

function somarTodosOsItensDoArray(total, item){
    return total + item.price; 
}

console.log(totalPreço);



