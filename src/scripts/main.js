document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    }) 

    // Seção de atrações, programação das abas;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion;
    for (let i = 0; i< questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    console.log('elemento');
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');
    const botao3 = document.getElementById('botao3');
    const botao4 = document.getElementById('botao4');
    const botao5 = document.getElementById('botao5');
    const botao6 = document.getElementById('botao6');
    const hover1 = document.getElementById('hover1');
    const hover2 = document.getElementById('hover2');
    const hover3 = document.getElementById('hover3');

    const botoesBumbo = document.querySelectorAll('.botaoBumbo');
    const clickSound = document.getElementById('clickSound');
    const bumboSound = document.getElementById('bumboSound');

    // Sons botão 1 HERO
    botao1.addEventListener('click', function () {
        clickSound.play();
    });
    botao1.addEventListener('mouseover', function () {
        hover1.play();
    });

    // Sons botão 2 HERO
    botao2.addEventListener('click', function () {
        clickSound.play();
    });
    botao2.addEventListener('mouseover', function () {
        hover2.play();
    });

    // Sons botão 3 HERO
    botao3.addEventListener('click', function () {
        clickSound.play();
    });
    botao3.addEventListener('mouseover', function () {
        hover3.play();
    });

    // Sons botão 4 PLATAFORMA
    botao4.addEventListener('click', function () {
        clickSound.play();
    });
    botao4.addEventListener('mouseover', function () {
        hover1.play();
    });

    // Sons botão 5 PLATAFORMA
    botao5.addEventListener('click', function () {
        clickSound.play();
    });
    botao5.addEventListener('mouseover', function () {
        hover2.play();
    });

    // Sons botão 6 PLATAFORMA
    botao6.addEventListener('click', function () {
        clickSound.play();
    });
    botao6.addEventListener('mouseover', function () {
        hover3.play();
    });

    // Sons botões bumbo
    botoesBumbo.forEach(function(botao) {
        botao.addEventListener('click', function () {
            bumboSound.play();
        });
    });
});