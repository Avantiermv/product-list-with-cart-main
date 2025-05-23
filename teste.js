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
                    orderWasConfirmed(product, quantityInf, itemP, quantityP);
                }
                function orderWasConfirmed(dessert, quantityInfo, unitPrice, totalItemPrice){
                const existingProduct = document.querySelector(`.products-bought-info[data-name="${dessert.name}"]`);
                if(!existingProduct){
                    const productsBoughtInfo = document.createElement('div');
                    productsBoughtInfo.classList.add('products-bought-info');
                    productsBoughtInfo.setAttribute('data-name', dessert.name);

                    const imgThumbnail = document.createElement('div');
                    imgThumbnail.classList.add('img-thumbnail');

                    const img = document.createElement('img');
                    img.src = dessert.image.thumbnail;

                    const namePriceQuantityItens = document.createElement('div');
                    namePriceQuantityItens.classList.add('name-price-quantity-itens');

                    const nameItem = document.createElement('p');
                    nameItem.classList.add('nameitem');
                    nameItem.textContent = dessert.name;

                    const quantityPriceItem = document.createElement('div');
                    quantityPriceItem.classList.add('quantity-priceitem');

                    const quantityInfoDivNewOrder = document.createElement('p');
                    quantityInfoDivNewOrder.classList.add('quantity-info-div-new-order');
                    quantityInfoDivNewOrder.textContent = quantityInfo.textContent;
                            
                    const quantityPriceDivNewOrder = document.createElement('p');
                    quantityPriceDivNewOrder.classList.add('quantity-price-div-new-order');
                    quantityPriceDivNewOrder.textContent = unitPrice.textContent;

                    const totalPricePerItemDiv = document.createElement('div');
                    totalPricePerItemDiv.classList.add('total-price-peritem-div');

                    const totalPricePerItem = document.createElement('p');
                    totalPricePerItem.classList.add('total-price-peritem');
                    totalPricePerItem.textContent = totalItemPrice.textContent;

                    const hr = document.createElement('hr');
                    hr.classList.add('hr');

                    productsBoughtInfo.appendChild(imgThumbnail);
                    imgThumbnail.appendChild(img);
                    productsBoughtInfo.appendChild(namePriceQuantityItens);
                    namePriceQuantityItens.appendChild(nameItem);
                    namePriceQuantityItens.appendChild(quantityPriceItem);
                    quantityPriceItem.appendChild(quantityInfoDivNewOrder);
                    quantityPriceItem.appendChild(quantityPriceDivNewOrder);
                    productsBoughtInfo.appendChild(totalPricePerItemDiv);
                    productsBoughtInfo.appendChild(hr);
                    totalPricePerItemDiv.appendChild(totalPricePerItem);
                    productsBought.appendChild(productsBoughtInfo);  
                } else {
                    const existingProductQuantityInfo = existingProduct.querySelector('.quantity-info-div-new-order');
                    const existingProductsQuantityPrice = existingProduct.querySelector('.quantity-price-div-new-order');

                    existingProductQuantityInfo.textContent = quantityInfo.textContent;
                    existingProductsQuantityPrice.textContent = totalItemPrice.textContent;
                }
            }