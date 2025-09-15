

export function changeButtonState(dessert){
   const button = document.querySelectorAll('.card-button');
   button.forEach(button => {
    if(dessert.id === 1){
        button.style.display = 'none';
    }
   });
}