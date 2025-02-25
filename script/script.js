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
                //Criar um elemento para o minusicon que é uma imagem
                //Criar um elemento para o spannumber que foi adicionada ao carrinho que é um span
                //Criar um elementp para o plusicon que é uma imagem

                //plusicon adiciona minusicon como filho
                //adiciona spannumber como filho
                //adiciona plusicon como filho

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