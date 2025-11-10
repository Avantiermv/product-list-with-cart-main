import { hideButtonAddToCart, showAddToCartButton } from "./changeButtonState.js";
import { hideEmptyCartMessage, showCartMessage, showTotalPrice, createItemInTheCart, removeItemInTheCart } from "./cartactions.js";

const cards = document.querySelector('.cards');
const totalItemsInTheCartTitle = document.querySelector('.quantity-number-in-the-cart');


export function createItenDynamically(desserts){
    desserts.forEach(dessert => {
        createItem(dessert);
    }); 
}

function createItem(dessert){
    const card = document.createElement('div');
    card.classList.add('card');

    const dessertImage = document.createElement('img');
    dessertImage.classList.add('dessert-image');
    dessertImage.src = dessert.image.mobile;

    const cardButton = document.createElement('div');
    cardButton.classList.add('card-button');
    cardButton.addEventListener('mouseleave', () => {
        alignAddToCartFirstInfo.style.display = 'flex';
        dessertImage.classList.remove('dessert-selected');
        showAddToCartButton(buttonsAddAndRemoveAlign);
    });

    const alignAddToCartFirstInfo = document.createElement('div');
    alignAddToCartFirstInfo.classList.add('align-add-to-cart-first-info');
    alignAddToCartFirstInfo.addEventListener('click', (event) => {
        event.currentTarget.style.display = 'none';
        dessertImage.classList.add('dessert-selected');
        hideButtonAddToCart(buttonsAddAndRemoveAlign);
    });

    const imageAddToCart = document.createElement('img');
    imageAddToCart.classList.add('image-add-to-cart');
    imageAddToCart.src = '/images/icon-add-to-cart.svg';

    const paragraphAddToCard = document.createElement('p');
    paragraphAddToCard.classList.add('add-to-cart-p');
    paragraphAddToCard.innerText = "Add To Cart";

    const buttonsAddAndRemoveAlign = document.createElement('div');
    buttonsAddAndRemoveAlign.classList.add('second-button');

    const removeItem = document.createElement('button');
    removeItem.classList.add('remove-item');
    removeItem.addEventListener('click', () => {
        fetch('/api/remove-dessert', {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dessert)
        })
        .then(response => response.json())
        .then(data => {
            if(data.totalItems === 0){
                showCartMessage();
            }
            dessertQuantity.textContent = data.singleItem;
            totalItemsInTheCartTitle.textContent = data.totalItems;
            showTotalPrice(data.totalPrice);
            removeItemInTheCart(data.dessertName, data.singleItem, data.dessertPriceTotalRemoved);
        });
    });
   
    const dessertQuantity = document.createElement('p');
    dessertQuantity.classList.add('dessert-quantity');
    dessertQuantity.textContent = 0;

    const addItem = document.createElement('button');
    addItem.classList.add('add-item');
    addItem.addEventListener('click', () => {
        fetch('/api/add-dessert', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dessert)
        })
        .then(response => response.json())
        .then(data => {
            if(data.totalItems >= 1){
                hideEmptyCartMessage();
            }
            dessertQuantity.textContent = data.singleItem;
            totalItemsInTheCartTitle.textContent = data.totalItems;
            showTotalPrice(data.totalPrice);
            createItemInTheCart(data.dessertName, data.singleItem, data.dessertPrice, data.dessertPriceTotalAdded);
        });
    });

    const svgImageAdd = document.createElement('svg');
    svgImageAdd.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" class="svg-decrement-increment"/></svg>';
    const svgImageRemove = document.createElement('svg');
    svgImageRemove.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="blue" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M0 .375h10v1.25H0V.375Z" class="svg-decrement-increment"/></svg>';
   
    const dessertInformation = document.createElement('div');
    dessertInformation.classList.add('dessert-information');

    const dessertCategory = document.createElement('h2');
    dessertCategory.classList.add('dessert-category');
    dessertCategory.textContent = dessert.category;

    const dessertName = document.createElement('h3');
    dessertName.classList.add('dessert-name');
    dessertName.textContent = dessert.name;

    const dessertPrice = document.createElement('h4');
    dessertPrice.classList.add('dessert-price');
    let price = parseFloat(dessert.price).toFixed(2);
    price = price.padStart(4, '0');
    dessertPrice.textContent = `$${price}`;

    card.appendChild(dessertImage);

    card.appendChild(cardButton);
    cardButton.appendChild(alignAddToCartFirstInfo);
    alignAddToCartFirstInfo.appendChild(imageAddToCart);
    alignAddToCartFirstInfo.appendChild(paragraphAddToCard);
    cardButton.appendChild(buttonsAddAndRemoveAlign);
    buttonsAddAndRemoveAlign.appendChild(removeItem);
    addItem.appendChild(svgImageAdd);
    buttonsAddAndRemoveAlign.appendChild(dessertQuantity)
    buttonsAddAndRemoveAlign.appendChild(addItem);
    removeItem.appendChild(svgImageRemove);

    card.appendChild(dessertInformation);
    dessertInformation.appendChild(dessertCategory);
    dessertInformation.appendChild(dessertName);
    dessertInformation.appendChild(dessertPrice);

    cards.appendChild(card);
}