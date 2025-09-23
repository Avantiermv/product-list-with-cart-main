import { esconderbotãodeaddtocart, mostrarbotãodeaddtocart } from "./changeButtonState.js";

const cards = document.querySelector('.cards');

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
        // buttonsAddAndRemoveAlign.classList.remove('buttons-add-and-remove-align');
        // buttonsAddAndRemoveAlign.classList.add('second-button');
        mostrarbotãodeaddtocart(buttonsAddAndRemoveAlign);
    });

    const alignAddToCartFirstInfo = document.createElement('div');
    alignAddToCartFirstInfo.classList.add('align-add-to-cart-first-info');
    alignAddToCartFirstInfo.addEventListener('click', (event) => {
        event.currentTarget.style.display = 'none';
        // buttonsAddAndRemoveAlign.classList.remove('second-button');
        // buttonsAddAndRemoveAlign.classList.add('buttons-add-and-remove-align');
        esconderbotãodeaddtocart(buttonsAddAndRemoveAlign);
    });

    const imageAddToCart = document.createElement('img');
    imageAddToCart.classList.add('image-add-to-cart');
    imageAddToCart.src = '/images/icon-add-to-cart.svg';

    const paragraphAddToCard = document.createElement('p');
    paragraphAddToCard.classList.add('add-to-cart-p');
    paragraphAddToCard.innerText = "Add To Cart";

    const buttonsAddAndRemoveAlign = document.createElement('div');
    buttonsAddAndRemoveAlign.classList.add('second-button');

    const addItem = document.createElement('button');
    addItem.classList.add('add-item');
    addItem.addEventListener('click', () => {console.log("ADD", dessert.name)});

    const dessertQuantity = document.createElement('p');
    dessertQuantity.classList.add('dessert-quantity');
    /*quantidade da sobremessa vai receber de um array lá*/
    dessertQuantity.textContent = "0";

    const removeItem = document.createElement('button');
    removeItem.classList.add('remove-item');
    removeItem.addEventListener('click', () => {console.log('REMOVE', dessert.name)});

    const svgImageAdd = document.createElement('svg');
    const svgImageRemove = document.createElement('svg');

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
    buttonsAddAndRemoveAlign.appendChild(addItem);
    addItem.appendChild(svgImageAdd);
    buttonsAddAndRemoveAlign.appendChild(dessertQuantity)
    buttonsAddAndRemoveAlign.appendChild(removeItem);
    removeItem.appendChild(svgImageRemove);

    card.appendChild(dessertInformation);
    dessertInformation.appendChild(dessertCategory);
    dessertInformation.appendChild(dessertName);
    dessertInformation.appendChild(dessertPrice);

    cards.appendChild(card);
}