export function esconderbotãodeaddtocart(button){
    button.classList.remove('second-button');
    button.classList.add('buttons-add-and-remove-align');
}

export function mostrarbotãodeaddtocart(button){
    button.classList.remove('buttons-add-and-remove-align');
    button.classList.add('second-button');
}
