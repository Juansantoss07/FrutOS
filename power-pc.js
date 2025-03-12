function ViewModel() {
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
        const buttonPower = document.querySelector('.power');
        const telaConteudoLigando = document.querySelector('.tela-conteudo-ligando-sistema');
        const telaConteudoGeral = document.querySelector('.tela-conteudo');
        const telaLogin = document.querySelector('.conteudo-pc-on-login');
        const outputElement = document.getElementById('output');
        
        telaConteudoLigando.style.display = 'block';
        telaConteudoGeral.style.background = '#111';
        buttonPower.style.background = 'aquamarine';
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
        }, 10000)
    };
}

var vm = new ViewModel();
ko.applyBindings(vm);
