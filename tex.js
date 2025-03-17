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



                