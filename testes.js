            const theCart = document.createElement('div');
            theCart.classList.add('the-cart');

            const cartTitle = document.createElement('h1');
            cartTitle.classList.add('the-cart-title');

            const emptyCartInfo = document.createElement('div');
            emptyCartInfo.classList.add('empty-cart-info');

            const emptyCartImg = document.createElement('img');
            emptyCartImg.src = './assets/images/illustration-empty-cart.svg';

            const emptyCartP = document.createElement('p');
            emptyCartP.classList.add('empty-cart-p');

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
            theCart.appendChild(emptyCartInfo);
            theCart.appendChild(productsAddedInfo);
            
            emptyCartInfo.appendChild(emptyCartImg);
            emptyCartInfo.appendChild(emptyCartP);

            productInfo.appendChild(adddedProducts);
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

            productInfo.appendChild(orderTotal);
            orderTotal.appendChild(orderTotalP);
            orderTotal.appendChild(orderTotalPrice);

            productInfo.appendChild(toAlignMessage);
            toAlignMessage.appendChild(messageDiv);
            messageDiv.appendChild(messageImg);
            messageDiv.appendChild(messageP);

            productInfo.appendChild(toAlignConfirmOrder);
            toAlignConfirmOrder.appendChild(confirmOrderButton);

            principal.appendChild(theCart);