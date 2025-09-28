document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o popup de aviso
    function initWarningPopup() {
        const warningPopup = document.getElementById('aviso_groot');
        const closeButton = document.getElementById('fechar-popup');

        function openPopup() {
            warningPopup.style.display = 'flex';
        }

        function closePopup() {
            warningPopup.style.display = 'none';
        }

        setTimeout(openPopup, 20);
        closeButton.addEventListener('click', closePopup);
    }

    // Inicializa o popup de artigos
    function initArticlePopup() {
        const readMoreButtons = document.querySelectorAll('.leia-mais');
        const articlePopup = document.getElementById('artigo-popup');
        const articleContent = document.getElementById('artigo-content');
        const closeArticlePopup = document.getElementById('fechar-artigo-popup');

        readMoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const content = button.dataset.content;
                const title = button.dataset.title;

                const popupContent = document.createElement('div');
                popupContent.classList.add('popup-artigo-content');

                const popupTitle = document.createElement('h3');
                popupTitle.textContent = title;

                let cleanedContent = content.replace(/<h3>(.*?)<\/h3>/g, '');

                popupContent.appendChild(popupTitle);
                popupContent.innerHTML += cleanedContent;

                articleContent.innerHTML = '';
                articleContent.appendChild(popupContent);

                articlePopup.style.display = 'flex';
            });
        });

        closeArticlePopup.addEventListener('click', () => {
            articlePopup.style.display = 'none';
        });
    }

    // Inicializa a funcionalidade de busca
    function initSearch() {
        const inputField = document.querySelector('.pesquisar-bar input');
        const searchButton = document.getElementById('search-button');
        const searchMessage = document.querySelector('.pesquisar-message');
        const articles = document.querySelectorAll('.artigo');

        function search() {
            const query = inputField.value.toLowerCase();
            let hasResults = false;

            articles.forEach(article => {
                const title = article.querySelector('.artigo-titulo').textContent.toLowerCase();
                const description = article.querySelector('.artigo-descricao').textContent.toLowerCase();

                if (title.includes(query) || description.includes(query)) {
                    article.style.display = 'block';
                    hasResults = true;
                } else {
                    article.style.display = 'none';
                }
            });

            if (hasResults) {
                searchMessage.textContent = `Resultados para: ${inputField.value}`;
            } else {
                searchMessage.textContent = 'Nenhum resultado encontrado.';
            }

            if (!inputField.value) {
                searchMessage.textContent = '';
                articles.forEach(article => {
                    article.style.display = 'block';
                });
            }
        }

        inputField.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                search();
            }
        });

        inputField.addEventListener('input', search); // Real-time search
        searchButton.addEventListener('click', search);
    }

    // Inicializa todas as funcionalidades
    initWarningPopup();
    initArticlePopup();
    initSearch();
});
