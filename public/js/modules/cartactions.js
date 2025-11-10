const listItemsAdded = document.querySelector('.list-items-added');

export function hideEmptyCartMessage(){
    const cartNothingAddedInfo = document.querySelector('.nothing-added-info');
    const cartItemAddedInfo = document.querySelector('.cart-items-added');

    cartItemAddedInfo.style.display = 'block';
    cartNothingAddedInfo.classList.add('hidden');
}
export function showCartMessage(){
    const cartNothingAddedInfo = document.querySelector('.nothing-added-info');
    const cartItemAddedInfo = document.querySelector('.cart-items-added');

    cartItemAddedInfo.style.display = 'none';
    cartNothingAddedInfo.classList.remove('hidden');
}

export function showTotalPrice(price){
    const totalPriceSpan = document.querySelector('.span-total-price');

    let priceItem = parseFloat(price).toFixed(2);
    priceItem = priceItem.padStart(4, '0');
    totalPriceSpan.textContent = `$${priceItem}`;
}

export function createItemInTheCart(dessertName, dessertQuantity, dessertPrice, dessertPriceAdded){
    const existingDessert = document.querySelector(`.align-item-informations[data-name="${dessertName}"]`);

    if(!existingDessert){
        const itemInformationDiv = document.createElement('div');
        itemInformationDiv.classList.add('item-information');

        const alignItemInformationDiv = document.createElement('div');
        alignItemInformationDiv.classList.add('align-item-informations');
        alignItemInformationDiv.setAttribute('data-name', dessertName);

        const itemNameP = document.createElement('p');
        itemNameP.classList.add('item-name');
        itemNameP.textContent = dessertName;

        const quantityPriceAndTotalPriceDiv = document.createElement('div');
        quantityPriceAndTotalPriceDiv.classList.add('quantity-price-totalItemPrice');

        const quantityP = document.createElement('p');
        quantityP.classList.add('quantity-p');

        const spanQuantity = document.createElement('span');
        spanQuantity.classList.add('quantity');
        spanQuantity.textContent = `${dessertQuantity}x`;

        const itemPriceP = document.createElement('p');
        itemPriceP.classList.add('item-price-p');

        const spanItemPrice = document.createElement('span');
        spanItemPrice.textContent = `@${dessertPrice}`;

        const totalItemP = document.createElement('p');
        totalItemP.classList.add('total-item-p');

        const spanTotalItemPrice = document.createElement('span');
        spanTotalItemPrice.classList.add('total-item-price');
        spanTotalItemPrice.textContent = `$${dessertPriceAdded}`;

        const alignRemoveSingleItemButtonDiv = document.createElement('div');
        alignRemoveSingleItemButtonDiv.classList.add('align-remove-single-item-button');

        const removeSingleItemButton = document.createElement('button');
        removeSingleItemButton.classList.add('remove-single-item-button');
        removeSingleItemButton.addEventListener('click', () => {
            removeTotalItems(dessertName);
        });

        const imgInsideTheButtonRemove = document.createElement('img');
        imgInsideTheButtonRemove.src = '/images/icon-remove-item.svg';
        imgInsideTheButtonRemove.alt = 'remove item';

        listItemsAdded.appendChild(itemInformationDiv);

        itemInformationDiv.appendChild(alignItemInformationDiv);
        itemInformationDiv.appendChild(alignRemoveSingleItemButtonDiv);

        alignItemInformationDiv.appendChild(itemNameP);
        alignItemInformationDiv.appendChild(quantityPriceAndTotalPriceDiv);

        quantityPriceAndTotalPriceDiv.appendChild(quantityP);
        quantityP.appendChild(spanQuantity);
        quantityPriceAndTotalPriceDiv.appendChild(itemPriceP);
        itemPriceP.appendChild(spanItemPrice);
        quantityPriceAndTotalPriceDiv.appendChild(totalItemP);
        totalItemP.appendChild(spanTotalItemPrice);

        alignRemoveSingleItemButtonDiv.appendChild(removeSingleItemButton);
        removeSingleItemButton.appendChild(imgInsideTheButtonRemove);
        console.log(dessertQuantity);
    }else{
        const spanQuantity = existingDessert.querySelector('.quantity');
        spanQuantity.textContent = `${dessertQuantity}x`;

        const spanTotalItemPrice = existingDessert.querySelector('.total-item-price');
        spanTotalItemPrice.textContent = `$${dessertPriceAdded}`;

        console.log("Rapaz, esse produto existe, então só aumenta a quantidade e preço total dele");
    }
}

export function removeItemInTheCart(dessertName, dessertQuantity, dessertPriceAdded){
    const itemElement = document.querySelector(`.align-item-informations[data-name="${dessertName}"]`);

    if(itemElement){
        const spanQuantity = itemElement.querySelector('.quantity');
        spanQuantity.textContent = `${dessertQuantity}x`;

        const spanTotalItemPrice = itemElement.querySelector('.total-item-price');
        spanTotalItemPrice.textContent = `$${dessertPriceAdded}`;

        if(dessertQuantity === 0){
            itemElement.parentElement.remove();
            console.log("Item visual removido do carrinho");
        }
    }
}

async function removeTotalItems(dessertName) {
    try{
        const response = await fetch(`api/remove-dessert?name=${encodeURIComponent(dessertName)}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data.totalItems);
    }catch(e){
        console.error("Error:", e);
    }
}