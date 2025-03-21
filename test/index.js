function load(){

    fetch('./script/data.json').then(response => response.json()).then(desserts => {

        const preçoDosMeusProdutos = []
        // Adicionar os preços ao array
         desserts.forEach(dessert => {
            preçoDosMeusProdutos.push(dessert.price);
        });

        // Somar os preços
        const somaTotal = preçoDosMeusProdutos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
         console.log(somaTotal); // Exibe a soma de todos os preços
    })
}
load();



