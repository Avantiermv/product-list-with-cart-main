document.addEventListener('DOMContentLoaded', () => {
    fetch('./script/data.json') //Por meio de requisição está acessando os dados do arquivo data.json
        .then(response => response.json()) // o response, pega os dados que o fetch acessou por meio de requisição e depois é coonvertido para algo usável no JS
        .then(desserts => { //quando todas as promessas de cima forem sucesso, ele executa essa linha
            const principal = document.querySelector('#desserts-container');
            const divToTheDesserts = document.querySelector('.desserts-content');
            const startNewOrder = document.querySelector('.startNewOrder');
            startNewOrder.classList.remove('startNewOrder');
            startNewOrder.classList.add('hidden');

            const shoppingCar = []; //Meu array com todos os itens adicionados
            let totalPrice = 0;

            desserts.forEach(dessert => {
                const singleItemArray = [];
                let totalPriceItem = 0;

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
                divToTheDesserts.appendChild(card);
                principal.appendChild(divToTheDesserts);

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
                    
                    const totalItemPrice = product.price * currentValue;

                    productName.textContent = `${product.name}`;
                    quantityInfo.textContent = `${numberIten.textContent}x`;
                    itemPrice.textContent = `@$${product.price}`;
                    quantityPrice.textContent = `$${totalItemPrice}`;

                    console.log("O produto ", product.name, "foi adicionado");
                    console.log(totalPrice);
                    spanCartTitle.textContent = `( ${shoppingCar.length} )`;
                    orderTotalPrice.textContent = `$${totalPrice}`;
                    addedToCartStyle();
                    dinamicDiv(product, quantityInfo, itemPrice, quantityPrice);
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
                            const totalItemPrice = product.price * currentValue;

                            quantityInfo.textContent = `${numberIten.textContent}x`;
                            quantityPrice.textContent = `$${totalItemPrice}`;
                            dinamicDiv(product, quantityInfo, itemPrice, quantityPrice);
                        }

                        if(currentValue == 0 && shoppingCar.length == 0){
                            removedFromCartStyle();
                        }
                    }
                    console.log("O item ", product.name, "foi removido");
                    console.log(totalPrice);
                    spanCartTitle.textContent = `( ${shoppingCar.length} )`;
                    orderTotalPrice.textContent = `$${totalPrice}`;
                }

                function dinamicDiv(product, quantityInf, itemP, quantityP){

                    const existingProduct = document.querySelector(`.products[data-name="${product.name}"]`);

                    if(!existingProduct){
                        const products = document.createElement('div');
                        products.classList.add('products');
                        products.setAttribute('data-name', product.name);

                        const productInfo = document.createElement('div');
                        productInfo.classList.add('product-info');

                        const productName = document.createElement('h1');
                        productName.classList.add('product-name');
                        productName.textContent = product.name;

                        const additionalInformation = document.createElement('div');
                        additionalInformation.classList.add('additional-information');

                        const quantityInfo = document.createElement('p');
                        quantityInfo.classList.add('quantity-info');
                        quantityInfo.textContent = quantityInf.textContent;

                        const itemPrice = document.createElement('p');
                        itemPrice.classList.add('item-price');
                        itemPrice.textContent = itemP.textContent;

                        const quantityPrice = document.createElement('p');
                        quantityPrice.classList.add('quantity-price');
                        quantityPrice.textContent = quantityP.textContent;

                        const buttonRemoveFromCart = document.createElement('button');
                        buttonRemoveFromCart.classList.add('button-remove-from-cart');
                        buttonRemoveFromCart.addEventListener('click', remove);

                        const buttonRemoveFromCartImage = document.createElement('img');
                        buttonRemoveFromCartImage.src = './assets/images/icon-remove-item.svg';
                        
                        const hr = document.createElement('hr');
                        hr.classList.add('hr');

                        adddedProducts.appendChild(products);
                        products.appendChild(productInfo);           
                        productInfo.appendChild(productName);
                        productInfo.appendChild(additionalInformation);
                        additionalInformation.appendChild(quantityInfo);
                        additionalInformation.appendChild(itemPrice);
                        additionalInformation.appendChild(quantityPrice);
                        products.appendChild(buttonRemoveFromCart);
                        buttonRemoveFromCart.appendChild(buttonRemoveFromCartImage);
                        products.appendChild(hr);
                    } else {
                        const existingProductQuantityInfo = existingProduct.querySelector('.quantity-info');
                        const existingProductsQuantityPrice = existingProduct.querySelector('.quantity-price');

                        existingProductQuantityInfo.textContent = quantityInf.textContent;
                        existingProductsQuantityPrice.textContent = quantityP.textContent;
                    }
                }
                //----------Fim das funções que somam um item ou retiram um item do carrinho----------// 


                //----------Inicio das funções do carrinho----------// 
                function addedToCartStyle(){
                    emptyCartInfo.classList.remove('empty-cart-info-visible');
                    emptyCartInfo.classList.add('empty-cart-info-hidden');
                    productsAddedInfo.classList.remove('products-added-info-hidden');
                    productsAddedInfo.classList.add('products-added-info-visible');
                }

                function removedFromCartStyle(){
                    productsAddedInfo.classList.remove('products-added-info-visible');
                    productsAddedInfo.classList.add('products-added-info-hidden');
                    emptyCartInfo.classList.remove('empty-cart-info-hidden');
                    emptyCartInfo.classList.add('empty-cart-info-visible');
                }
                //----------Fim das funções do carrinho----------// 
            });

            //----------Inicio da criação do carrinho----------// 
            const theCart = document.createElement('div');
            theCart.classList.add('the-cart');

            const cartTitle = document.createElement('h1');
            cartTitle.classList.add('the-cart-title');
            cartTitle.textContent = "Your cart ";

            const spanCartTitle = document.createElement('span'); //Está sendo atualizado dentro da função desserts.forEach!
            spanCartTitle.textContent = "( 0 )";

            const emptyCartInfo = document.createElement('div');
            emptyCartInfo.classList.add('empty-cart-info-visible');

            const emptyCartImg = document.createElement('img');
            emptyCartImg.src = './assets/images/illustration-empty-cart.svg';

            const emptyCartP = document.createElement('p');
            emptyCartP.classList.add('empty-cart-p');
            emptyCartP.textContent = "Your itens will appear here";

            const productsAddedInfo = document.createElement('div');
            productsAddedInfo.classList.add('products-added-info-hidden'); 
            
            const adddedProducts = document.createElement('div');
            adddedProducts.classList.add('added-products');

            const products = document.createElement('div');
            products.classList.add('products');

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

            const productName = document.createElement('h1');
            productName.classList.add('product-name');
            productName.textContent = "Rapaz";

            const additionalInformation = document.createElement('div');
            additionalInformation.classList.add('additional-information');

            const quantityInfo = document.createElement('p');
            quantityInfo.classList.add('quantity-info');
            quantityInfo.textContent = "Rapaz n 1";

            const itemPrice = document.createElement('p');
            itemPrice.classList.add('item-price');
            itemPrice.textContent = "Rapaz $1";

            const quantityPrice = document.createElement('p');
            quantityPrice.classList.add('quantity-price');
            quantityPrice.textContent = "Rapaz $1";

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
            orderTotalP.textContent = "Order Total";

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
            messageP.innerHTML = "This is a <strong> carbon-neutral </strong> delivery";

            const toAlignConfirmOrder = document.createElement('div');
            toAlignConfirmOrder.classList.add('to-align-confirm-order');

            const confirmOrderButton = document.createElement('button');
            confirmOrderButton.classList.add('confirm-order');
            confirmOrderButton.textContent = "Confirm Order";
            confirmOrderButton.addEventListener('click', () => {
                principal.classList.remove('principal');
                principal.classList.add('hidden');
                startNewOrder.classList.remove('hidden');
                startNewOrder.classList.add('startNewOrder');
            });
            
            
            theCart.appendChild(cartTitle);
            cartTitle.appendChild(spanCartTitle);

            theCart.appendChild(emptyCartInfo);
            emptyCartInfo.appendChild(emptyCartImg);
            emptyCartInfo.appendChild(emptyCartP);

            theCart.appendChild(productsAddedInfo);
            productsAddedInfo.appendChild(adddedProducts);
            
            productsAddedInfo.appendChild(orderTotal);
            orderTotal.appendChild(orderTotalP);
            orderTotal.appendChild(orderTotalPrice);

            productsAddedInfo.appendChild(toAlignMessage);
            toAlignMessage.appendChild(messageDiv);
            messageDiv.appendChild(messageImg);
            messageDiv.appendChild(messageP);

            productsAddedInfo.appendChild(toAlignConfirmOrder);
            toAlignConfirmOrder.appendChild(confirmOrderButton);

            principal.appendChild(theCart);
            //----------Fim da criação do carrinho----------// 

            //----------Inicio da criação dos itens de "Start New Order"----------// 
            const checkImg = document.createElement('div');
            checkImg.classList.add('check-img');

            const imgCheck = document.createElement('img');
            imgCheck.src = 'assets/images/icon-order-confirmed.svg';
             
            const h1 = document.createElement('h1');
            h1.classList.add('h1-order-confirmed');
            h1.textContent = "Order confirmed";

            const p1 = document.createElement('p');
            p1.classList.add('p1-order-confirmed');
            p1.textContent = "We hope you enjoy your food!";

            const divContent = document.createElement('div');
            divContent.classList.add('content');

            const divProductsBoght = document.createElement('div');
            divProductsBoght.classList.add('products-bought');

            const divProductsBoghtInfo = document.createElement('div');
            divProductsBoghtInfo.classList.add('products-bought-info');

            const divThumbnail = document.createElement('div');
            divThumbnail.classList.add('img-thumbnail');

            const imgThumbnail = document.createElement('img');

            const divPriceAndQuantity = document.createElement('div');
            divPriceAndQuantity.classList.add('name-price-quantity-itens');

            const p1NameItem = document.createElement('p');
            p1NameItem.classList.add('nameitem');

            const divQuantityPriceItem = document.createElement('div');
            divQuantityPriceItem.classList.add('quantity-priceitem');

            const pQuantityInfo = document.createElement('P');
            pQuantityInfo.classList.add('quantity-info-div-new-order');

            const pQuantityPrice = document.createElement('p');
            pQuantityPrice.classList.add('quantity-price-div-new-order');

            const divTotalPriceItem = document.createElement('div');
            divTotalPriceItem.classList.add('total-price-peritem-div');

            const pTotalPriceItem = document.createElement('p');
            pTotalPriceItem.classList.add('total-price-peritem');

            const buttonOfStartNewOrder = document.createElement('button');
            buttonOfStartNewOrder.classList.add('confirm-order');

            const hrOfStartNewOrder = document.createElement('hr');
            hrOfStartNewOrder.classList.add('hr');

            startNewOrder.appendChild(checkImg);
            checkImg.appendChild(imgCheck);
            startNewOrder.appendChild(h1);
            startNewOrder.appendChild(p1);

            startNewOrder.appendChild(divContent);
            divContent.appendChild(divProductsBoght);
            divProductsBoght.appendChild(divProductsBoghtInfo);
            divProductsBoghtInfo.appendChild(divThumbnail);
            divThumbnail.appendChild(imgThumbnail);

            divProductsBoghtInfo.appendChild(divPriceAndQuantity);
            divPriceAndQuantity.appendChild(p1NameItem);
            divPriceAndQuantity.appendChild(divQuantityPriceItem);
            divQuantityPriceItem.appendChild(pQuantityInfo);
            divQuantityPriceItem.appendChild(pQuantityPrice);

            divProductsBoghtInfo.appendChild(divTotalPriceItem);
            divTotalPriceItem.appendChild(pTotalPriceItem);
            divProductsBoghtInfo.appendChild(hrOfStartNewOrder);

            divContent.appendChild(buttonOfStartNewOrder);
            //----------Fim da criação dos itens de "Start New Order"----------// 


        }).catch(error => {
            console.log('Error', error);
        });
});