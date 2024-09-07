document.addEventListener('DOMContentLoaded', function () {
    // Função para abrir o popup
    function openPopup() {
        document.getElementById('aviso_groot').style.display = 'flex';
    }

    // Função para fechar o popup
    function closePopup() {
        document.getElementById('aviso_groot').style.display = 'none';
    }

    // Exibir o popup após 5 segundos
    setTimeout(openPopup, 20);

    // Adicionar evento de clique para fechar o popup
    document.getElementById('close-popup').addEventListener('click', closePopup);

    // Implementar busca ao pressionar Enter
    const inputField = document.querySelector('.pesquisar-bar input');
    const searchButton = document.getElementById('search-button');
    const searchMessage = document.querySelector('.pesquisar-message');

    inputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            search();
        }
    });

    searchButton.addEventListener('click', search);

    function search() {
        const query = inputField.value;
        if (query) {
            searchMessage.textContent = `Resultados para: ${query}`;
        } else {
            searchMessage.textContent = 'Digite algo para pesquisar!';
        }
    }

    // Abrir o popup do artigo
    const readMoreButtons = document.querySelectorAll('.read-more');
    const articlePopup = document.getElementById('article-popup');
    const articleContent = document.getElementById('article-content');
    const closeArticlePopup = document.getElementById('close-article-popup');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.dataset.content;
            const title = button.dataset.title;

            articleContent.innerHTML = content;
            articleContent.querySelector('h3').textContent = title;
            articlePopup.style.display = 'flex';
        });
    });

    closeArticlePopup.addEventListener('click', () => {
        articlePopup.style.display = 'none';
    });
});