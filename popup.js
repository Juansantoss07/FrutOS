// Variaveis
const popup = document.querySelector('.popup');
const button = document.querySelector('.close-popup');

//Ocultar pop up quando clicado no button de Okay
button.addEventListener('click', () => {
    popup.style.display = 'none';
})