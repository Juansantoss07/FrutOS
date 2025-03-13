// Variaveis
const popup = document.querySelector('.popup');
const button = document.querySelector('.close-popup');

//Ocultar pop up quando clicado no button de Okay
button.addEventListener('click', () => {
    popup.style.display = 'none';
})

document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o usuário já viu o popup
    if (!localStorage.getItem("popupVisto")) {
        popup.style.display = "flex"; // Exibe o popup

        // Marca que o popup já foi visto
        localStorage.setItem("popupVisto", "true");
    }
});