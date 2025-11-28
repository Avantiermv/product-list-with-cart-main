import { showCartMessage } from "./cartactions.js";

const containerToAddTheItemsFromTheCart = document.querySelector('.container-to-purchased-item-info');
const startNewOrderButton = document.querySelector('.start-new-order-button');
const divPopUp = document.querySelector('.active-popup-background');
const listItemsAdded = document.querySelector('.list-items-added');
const totalItemsInTheCart = document.querySelector('.quantity-number-in-the-cart');

export function createTheItemsInfoIntoThePopUp(dessertImage, dessertName, dessertQuantity, dessertSinglePrice, dessertTotalPrice){

    const existinDessert =  document.querySelector(`.purchased-item-info[data-name="${dessertName}"]`);

    if(!existinDessert){
        const purchasedItemsInfo = document.createElement('div');
        purchasedItemsInfo.classList.add('purchased-item-info');
        purchasedItemsInfo.setAttribute('data-name', dessertName);

        const divAlignAllItems = document.createElement('div');
        divAlignAllItems.classList.add('align-thumbnail-with-div-totalPrice');

        const encapsulator = document.createElement('div');
        encapsulator.classList.add('encapsulator');

        const divThumbnailOfTheProduct = document.createElement('div');
        divThumbnailOfTheProduct.classList.add('div-thumbnail-product');

        const imgOfTheThumbnail = document.createElement('img');
        imgOfTheThumbnail.classList.add('thumbnail-product-img');
        imgOfTheThumbnail.src = dessertImage;

        const divNameQuantitySinglePrice = document.createElement('div');
        divNameQuantitySinglePrice.classList.add('div-item-name-quantity-Singleprice');

        const productNameParagraph = document.createElement('p');
        productNameParagraph.classList.add('product-name');
        productNameParagraph.textContent = dessertName;

        const divAlignOtherProductInfo = document.createElement('div');
        divAlignOtherProductInfo.classList.add('align-product-quantity-singlePrice');

        const productQuantityParagraph = document.createElement('p');
        productQuantityParagraph.classList.add('product-quantity');
        const spanIntoTheQuantityParagraph = document.createElement('span');
        spanIntoTheQuantityParagraph.classList.add('span-quantity');
        spanIntoTheQuantityParagraph.textContent = `${dessertQuantity}x`;

        const productSinglePriceParagraph = document.createElement('p');
        productSinglePriceParagraph.classList.add('product-singlePrice');
        const spanIntoTheSinglePriceParagraph = document.createElement('span');
        spanIntoTheSinglePriceParagraph.classList.add('span-singlePrice');
        spanIntoTheSinglePriceParagraph.textContent = `@${dessertSinglePrice}`;

        const divItemTotalPrice = document.createElement('div');
        divItemTotalPrice.classList.add('div-item-totalPrice');

        const itemTotalPriceH2 = document.createElement('h2');
        itemTotalPriceH2.classList.add('item-totalPrice');
        let totalItemPrice = parseFloat(dessertTotalPrice).toFixed(2);
        totalItemPrice = totalItemPrice.padStart(4, '0');
        itemTotalPriceH2.textContent =  `$${totalItemPrice}`;

        containerToAddTheItemsFromTheCart.appendChild(purchasedItemsInfo);
        purchasedItemsInfo.appendChild(divAlignAllItems);
        divAlignAllItems.appendChild(encapsulator);
        encapsulator.appendChild(divThumbnailOfTheProduct);
        divThumbnailOfTheProduct.appendChild(imgOfTheThumbnail);
        encapsulator.appendChild(divNameQuantitySinglePrice);
        divNameQuantitySinglePrice.appendChild(productNameParagraph);
        divNameQuantitySinglePrice.appendChild(divAlignOtherProductInfo);
        divAlignOtherProductInfo.appendChild(productQuantityParagraph);
        productQuantityParagraph.appendChild(spanIntoTheQuantityParagraph);
        divAlignOtherProductInfo.appendChild(productSinglePriceParagraph);
        productSinglePriceParagraph.appendChild(spanIntoTheSinglePriceParagraph);

        divAlignAllItems.appendChild(divItemTotalPrice);
        divItemTotalPrice.appendChild(itemTotalPriceH2);
    }else{
        let totalItemPrice = parseFloat(dessertTotalPrice).toFixed(2);
        totalItemPrice = totalItemPrice.padStart(4, '0');
        let singleItemPrice = parseFloat(dessertSinglePrice).toFixed(2);
        singleItemPrice = singleItemPrice.padStart(4, '0');

        const spanIntoTheQuantityParagraph = existinDessert.querySelector('.span-quantity');
        spanIntoTheQuantityParagraph.textContent = `${dessertQuantity}x`;

        const spanIntoTheSinglePriceParagraph = existinDessert.querySelector('.span-singlePrice');
        spanIntoTheSinglePriceParagraph.textContent = `@${singleItemPrice}`;

        const itemTotalPriceH2 = existinDessert.querySelector('.item-totalPrice');
        itemTotalPriceH2.textContent = `$${totalItemPrice}`;
    }
}

startNewOrderButton.addEventListener('click', () => {
    
    fetch('/api/start-new-order', {method: 'POST'})
        .then(response => response.json())
        .then(data => {
            const listItemPopUp = document.querySelector('.container-to-purchased-item-info');

            console.log(data.message);
            showCartMessage();
            divPopUp.classList.remove('visible');
            divPopUp.classList.add('hidden');
            listItemsAdded.innerHTML = '';
            totalItemsInTheCart.textContent = 0;
            listItemPopUp.innerHTML = '';
        })
        .catch(e => {console.log("Error: ", e)});
});