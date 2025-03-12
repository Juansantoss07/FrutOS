function ViewModel() {

    const buttonPower = document.querySelector('.power');
    const telaConteudoLigando = document.querySelector('.tela-conteudo-ligando-sistema');
    const telaConteudoGeral = document.querySelector('.tela-conteudo');
    const telaLogin = document.querySelector('.conteudo-pc-on-login');
    const outputElement = document.getElementById('output');
    const telaAreaTrabalho = document.querySelector('.area-trabalho');
    const telaLoader = document.querySelector('.tela-loader');
    var self = this;
    
    self.telaConteudoLigando = ko.observable('');

    const palavras = [
        "Iniciando sistema...",
        "Carregando... 45%",
        "Processando dados...",
        "Aguarde...",
        "Conectando ao servidor...",
        "Sistema pronto!"
    ];

    self.buttonPower = function() {

        
        buttonPower.disabled = true;
        telaConteudoLigando.style.display = 'flex';
        telaConteudoGeral.style.background = '#111';
        buttonPower.style.background = 'aquamarine';
        buttonPower.style.border = 'none';
        buttonPower.style.boxShadow = 'inset 4px 4px 10px rgba(0, 0, 0, 0.5), inset -4px -4px 10px rgba(255, 255, 255, 0.2)';

        // Função para adicionar uma palavra com o efeito de digitação
        function adicionarPalavra(palavra, delay) {
            setTimeout(() => {
                let novoElemento = document.createElement('p');
                novoElemento.classList.add('typing');
                novoElemento.textContent = palavra;
                outputElement.appendChild(novoElemento);
            }, delay);
        }

        // Adicionar todas as palavras com um intervalo
        let delay = 0;
        palavras.forEach(function(palavra) {
            adicionarPalavra(palavra, delay);
            delay += 1500; 
        });

        setTimeout(() => {
            telaConteudoLigando.style.display = 'none';
            telaLogin.style.display = 'flex';

            let audio = new Audio('sound/windows-7-startup.mp3');
            audio.play();
        }, 10000)
    };

    self.buttonEnterLogin = function() {
        telaLogin.style.display = 'none';
        telaLoader.style.display = 'flex';

        setTimeout(()=>{
            telaLoader.style.display = 'none';
            telaAreaTrabalho.style.display = 'flex'; 
        },2000)       
    }
}

var vm = new ViewModel();
ko.applyBindings(vm);
