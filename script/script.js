function load() {
    fetch('./script/data.json') //Por meio de requisição está acessando os dados do arquivo data.json
        .then(response => response.json()) // o response, pega os dados que o fetch acessou por meio de requisição e depois é coonvertido para algo usável no JS
        .then(desserts => { //quando todas as promessas de cima forem sucesso, ele executa essa linha
            const principal = document.querySelector('#desserts-container');

            const shoppingCar = []; //Meu array com todos os itens adicionados
            let totalPrice = 0;

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

                //----------Todas as funções que somam algum item no carrinho ou tiram algun item do carrinho----------// 

                function plusIncrement(){
                    buttonPlus.addEventListener('click', add);
                }
                function minusDecrement(){
                    buttonMinus.addEventListener('click', remove);
                }
                function add(){
                    addIten(dessert, spanNumberItens);
                }
                function remove(){
                    removeIten(dessert, spanNumberItens);
                }

                function addIten(product, numberIten){
                    let currentValue = parseInt(numberIten.textContent, 10) || 0;
                    currentValue++;
                    numberIten.textContent = currentValue;

                    shoppingCar.push({name: product.name, price: product.price});
                    totalPrice += product.price;

                    
                    console.log("O produto ", product.name, "foi adicionado");
                    console.log(totalPrice);
                    spanCartTitle.textContent = `( ${shoppingCar.length} )`;
                }

                function removeIten(product, numberIten){
                    let currentValue = parseInt(numberIten.textContent, 10) || 0;
                    if(currentValue > 0){
                        currentValue--;
                        numberIten.textContent = currentValue;

                        const index = shoppingCar.findIndex(item => item.price === product.price);
                        if(index !== -1){
                            shoppingCar.splice(index, 1);
                            totalPrice -= product.price;
                        }
                    }
                    console.log("O item ", product.name, "foi removido");
                    console.log(totalPrice);
                    spanCartTitle.textContent = `( ${shoppingCar.length} )`;
                }
                //----------Fim das funções que somam um item ou retiram um item do carrinho----------// 
            });

            const theCart = document.createElement('div');
            theCart.classList.add('the-cart');

            const cartTitle = document.createElement('h1');
            cartTitle.classList.add('the-cart-title');
            cartTitle.textContent = "Your cart ";

            const spanCartTitle = document.createElement('span'); //Está sendo atualizado dentro da função desserts.forEach!
            spanCartTitle.textContent = "( 0 )"

            const emptyCartInfo = document.createElement('div');
            emptyCartInfo.classList.add('empty-cart-info');

            const emptyCartImg = document.createElement('img');
            emptyCartImg.src = './assets/images/illustration-empty-cart.svg';

            const emptyCartP = document.createElement('p');
            emptyCartP.classList.add('empty-cart-p');
            emptyCartP.textContent = "Your itens will appear here"

            const productsAddedInfo = document.createElement('div');
            
            const adddedProducts = document.createElement('div');
            adddedProducts.classList.add('added-products');

            const products = document.createElement('div');
            products.classList.add('products');

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

            const productName = document.createElement('h1');
            productName.classList.add('product-name');

            const additionalInformation = document.createElement('div');
            additionalInformation.classList.add('additional-information');

            const quantityInfo = document.createElement('p');
            quantityInfo.classList.add('quantity-info');

            const itemPrice = document.createElement('p');
            itemPrice.classList.add('item-price');

            const quantityPrice = document.createElement('p');
            quantityPrice.classList.add('quantity-price');

            const buttonRemoveFromCart = document.createElement('button');
            buttonRemoveFromCart.classList.add('button-remove-from-cart');

            const buttonRemoveFromCartImage = document.createElement('img');
            buttonRemoveFromCartImage.src = './assets/images/icon-remove-item.svg';

            const hr = document.createElement('hr');
            hr.classList.add('hr');

            const orderTotal = document.createElement('div');
            orderTotal.classList.add('order-total');

            const orderTotalP = document.createElement('p');
            orderTotalP.classList.add('order-total-p');

            const orderTotalPrice = document.createElement('p');
            orderTotalPrice.classList.add('total-price');

            const toAlignMessage = document.createElement('div');
            toAlignMessage.classList.add('to-align-message');

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');

            const messageImg = document.createElement('img');
            messageImg.src = './assets/images/icon-carbon-neutral.svg';

            const messageP = document.createElement('p');
            messageP.classList.add('carbon-neutral-paragraph');

            const toAlignConfirmOrder = document.createElement('div');
            toAlignConfirmOrder.classList.add('to-align-confirm-order');

            const confirmOrderButton = document.createElement('button');
            confirmOrderButton.classList.add('confirm-order');

            theCart.appendChild(cartTitle);
            cartTitle.appendChild(spanCartTitle);
            theCart.appendChild(emptyCartInfo);
            emptyCartInfo.appendChild(emptyCartImg);
            emptyCartInfo.appendChild(emptyCartP);

            



            principal.appendChild(theCart);

        }).catch(error => {
            console.log('Error', error);
        });
}
load();