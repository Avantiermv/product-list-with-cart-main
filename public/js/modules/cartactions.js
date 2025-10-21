export function hideEmptyCartMessage(){
    const cartNothingAddedInfo = document.querySelector('.nothing-added-info');
    console.log("Adicionando div");
    if(cartNothingAddedInfo){
        cartNothingAddedInfo.classList.add('hidden');
    }
}
export function showCartMessage(){
    const cartNothingAddedInfo = document.querySelector('.nothing-added-info');
    console.log("removendo div");
    if(cartNothingAddedInfo){
        cartNothingAddedInfo.classList.remove('hidden');
    }
}