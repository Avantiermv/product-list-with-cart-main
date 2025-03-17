function load() {
    fetch('./script/data.json') //Por meio de requisição está acessando os dados do arquivo data.json
        .then(response => response.json()) // o response, pega os dados que o fetch acessou por meio de requisição e depois é coonvertido para algo usável no JS
        .then(desserts => { //quando todas as promessas de cima forem sucesso, ele executa essa linha
            const principal = document.querySelector('#desserts-container');

            desserts.forEach(dessert => {
                const card = document.createElement("div");
                card.classList.add("desserts-cards");

                const image = document.createElement("img");
                image.src = dessert.image.mobile;
                image.alt = dessert.name;

                const divButton = document.createElement("div");
                divButton.classList.add("div-button");
                divButton.id = "add-button";

                const divalignplusminus = document.createElement("div");
                divalignplusminus.classList.add("to-align-plusminus");

                const plusminusbutton = document.createElement("div");
                plusminusbutton.classList.add("plus-minus-button");

                const buttonMinus = document.createElement("button");
                buttonMinus.classList.add("buttonIncrements");

                const imgMinus = document.createElement("img");
                imgMinus.src = "./assets/images/icon-decrement-quantity.svg";

                const spanNumberItens = document.createElement("span");
                spanNumberItens.textContent = 0;
                spanNumberItens.classList.add("itens-quantity");

                const buttonPlus = document.createElement("button");
                buttonPlus.classList.add("buttonIncrements");

                const imgPlus = document.createElement("img");
                imgPlus.src = "./assets/images/icon-increment-quantity.svg";

                buttonMinus.appendChild(imgMinus);
                buttonPlus.appendChild(imgPlus);

                plusminusbutton.appendChild(buttonMinus);
                plusminusbutton.appendChild(spanNumberItens);
                plusminusbutton.appendChild(buttonPlus);

                divalignplusminus.appendChild(plusminusbutton);

                const button = document.createElement("button");
                button.type = "submit";
                button.classList.add("button");

                const buttonIcon = document.createElement("img");
                buttonIcon.src = "./assets/images/icon-add-to-cart.svg";

                const textButton = document.createElement("p");
                textButton.textContent = "Add to cart";

                const textContent = document.createElement("div");
                textContent.classList.add("text");

                const title = document.createElement("h1");
                title.textContent = dessert.category;

                const dessertName = document.createElement("h2");
                dessertName.textContent = dessert.name;

                const dessertPrice = document.createElement("h3");
                let price = parseFloat(dessert.price).toFixed(2);
                price = price.padStart(4, '0');
                dessertPrice.textContent = price;
                
                divButton.appendChild(button);
                button.appendChild(buttonIcon);
                button.appendChild(textButton);
                textContent.appendChild(title);
                textContent.appendChild(dessertName);
                textContent.appendChild(dessertPrice);

                card.appendChild(image);
                card.appendChild(divButton);
                card.appendChild(divalignplusminus);
                card.appendChild(textContent);
                principal.appendChild(card);

                divalignplusminus.style.display = 'none';
                
                function showShoppingCar(){
                    button.addEventListener('click', (e) => {
                     divButton.classList.add("div-button-hidden");
                     divalignplusminus.classList.add("to-align-plusminus-visible");
                     divalignplusminus.classList.remove("to-align-plusminus-hidden");
                     divButton.classList.remove("div-button-visible");
                     setTimeout(() => {
                        divalignplusminus.style.display = 'flex';
                     }, 100);
                     minusDecrement();
                     plusIncrement();
                    });
                }
                
                button.addEventListener('click', showShoppingCar);

                plusminusbutton.addEventListener('mouseleave', (e) =>{
                    divButton.classList.remove("div-button-hidden");
                    divButton.classList.add("div-button-visible");
                    divalignplusminus.classList.add("to-align-plusminus-hidden");       
                    divalignplusminus.classList.remove("to-align-plusminus-visible");
                    setTimeout(() => {
                        divalignplusminus.style.display = 'none';
                    }, 100);
                });

                function minusDecrement(){
                    buttonMinus.addEventListener('click', () => {
                        decrement(dessert, spanNumberItens);
                    });
                }
                
                function plusIncrement(){
                    buttonPlus.addEventListener('click', () => {
                        increment(dessert, spanNumberItens);
                    })
                }

                //criar uma função que some todos os produtos que foram colocados
                //criar uma div para o carrinho



            });
        }).catch(error => {
            console.log('Error', error);
        });
}
load();