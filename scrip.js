const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })
   document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    let focusedItem = null;

    // Função para focar no próximo item
    function focusNextItem() {
        if (!focusedItem) {
            focusedItem = navItems[0];
        } else {
            const currentIndex = Array.prototype.indexOf.call(navItems, focusedItem);
            if (currentIndex === navItems.length - 1) {
                focusedItem = navItems[0];
            } else {
                focusedItem = navItems[currentIndex + 1];
            }
        }
        focusedItem.focus();
    }

    // Função para focar no item anterior
    function focusPrevItem() {
        if (!focusedItem) {
            focusedItem = navItems[navItems.length - 1];
        } else {
            const currentIndex = Array.prototype.indexOf.call(navItems, focusedItem);
            if (currentIndex === 0) {
                focusedItem = navItems[navItems.length - 1];
            } else {
                focusedItem = navItems[currentIndex - 1];
            }
        }
        focusedItem.focus();
    }

    // Adicionar evento de teclado para navegar
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            focusNextItem();
        } else if (event.key === 'ArrowLeft') {
            focusPrevItem();
        }
    });

    // Atualizar o item focado
    navItems.forEach(function(item) {
        item.addEventListener('focus', function() {
            focusedItem = item;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    let fontSize = 100; // Valor inicial em porcentagem

    // Evento para aumentar a fonte
    increaseFontBtn.addEventListener('click', function() {
        fontSize += 10; // Aumenta em 10%
        body.style.fontSize = fontSize + '%';
    });

    // Evento para diminuir a fonte
    decreaseFontBtn.addEventListener('click', function() {
        fontSize -= 10; // Diminui em 10%
        if (fontSize < 50) fontSize = 50; // Limite mínimo
        body.style.fontSize = fontSize + '%';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const increasePageBtn = document.getElementById('increase-page');
    const decreasePageBtn = document.getElementById('decrease-page');
    let zoomLevel = 1; // Valor inicial do zoom

    // Evento para aumentar o zoom da página
    increasePageBtn.addEventListener('click', function() {
        zoomLevel += 0.1; // Aumenta em 10%
        body.style.zoom = zoomLevel;
    });

    // Evento para diminuir o zoom da página
    decreasePageBtn.addEventListener('click', function() {
        zoomLevel -= 0.1; // Diminui em 10%
        if (zoomLevel < 0.5) zoomLevel = 0.5; // Limite mínimo
        body.style.zoom = zoomLevel;
    });
});