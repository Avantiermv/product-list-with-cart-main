function load() {
    fetch('./script/data.json')
        .then(response => response.json())
        .then(desserts => {
            const principal = document.querySelector('#desserts-container');

            desserts.map(dessert => {
                const card = document.createElement("div");
                card.classList.add("desserts-cards");

               /*Criar um loop aqui*/ 
                const image = document.createElement("img");
                image.src = dessert.image.mobile;
                image.alt = dessert.name;

                const divButton = document.createElement("div");
                divButton.classList.add("div-button");
                divButton.id = "add-button";
                divButton.onclick = function() {
                    showPlusMinusButton(this);
                };

                //Criar um elemento div para o plusminusbutton aparecer
                const plusminusbutton = document.createElement("div");
                //adicionar o classlist do plusminusbutton
                plusminusbutton.classList.add("plus-minus-button");
                //Criar um elemento button para o minusicon
                const buttonMinus = document.createElement("button");
                //adicionar o classlist de "button-increments"
                buttonMinus.classList.add("buttonIncrements");
                //criar um elemento img que vai ser o minus
                const imgMinus = document.createElement("img");
                imgMinus.src = "./assets/images/icon-decrement-quantity.svg";
                //Criar um elemento span para o n
                const spanNumberItens = document.createElement("span");
                //adicionar o classlist do span
                spanNumberItens.classList.add("itens-quantity");
                //Criar um elemento button para o plusicon
                const buttonPlus = document.createElement("button");
                //adicionar o classlist de button increments
                buttonPlus.classList.add("buttonIncrements");
                //Criar um elemento img que vai ser o plus
                const imgPlus = document.createElement("img");
                imgPlus.src = "./assets/images/icon-increment-quantity.svg";

                //buttonMinus adiciona a imgMinus como filha
                //buttonPlus adiciona a imgPlus como filha

                //plusminusbutton adiciona o button de minusicon
                //plusminusbutton adiciona o spna
                //plusminusbutton adiciona o button de plusicon

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
                //divButton adiciona minusplusbutton como filho
                button.appendChild(buttonIcon);
                button.appendChild(textButton);
                textContent.appendChild(title);
                textContent.appendChild(dessertName);
                textContent.appendChild(dessertPrice);

                card.appendChild(image);
                card.appendChild(divButton);
                card.appendChild(textContent);
                principal.appendChild(card);
            })
        });
}
load();

function showPlusMinusButton(){
    alert('Rapaz, ele tá sem zap!!')
}