document.addEventListener('DOMContentLoaded', function () {
    // Função para abrir o popup de aviso
    function openPopup() {
        document.getElementById('aviso_groot').style.display = 'flex';
    }

    // Função para fechar o popup de aviso
    function closePopup() {
        document.getElementById('aviso_groot').style.display = 'none';
    }

    // Exibe o popup de aviso após 5 segundos
    setTimeout(openPopup, 20);

    // Adiciona evento de clique para fechar o popup de aviso
    document.getElementById('fechar-popup').addEventListener('click', closePopup);

    // Implementa a busca ao pressionar Enter ou clicar no botão
    const inputField = document.querySelector('.pesquisar-bar input');
    const searchButton = document.getElementById('search-button');
    const searchMessage = document.querySelector('.pesquisar-message');

    inputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            search();
        }
    });

    searchButton.addEventListener('click', search);

    // Função para realizar a busca
    function search() {
        const query = inputField.value;
        if (query) {
            searchMessage.textContent = `Resultados para: ${query}`;
        } else {
            searchMessage.textContent = 'Digite algo para pesquisar!';
        }
    }

    // Abre o popup do artigo
    const readMoreButtons = document.querySelectorAll('.leia-mais');
    const articlePopup = document.getElementById('artigo-popup');
    const articleContent = document.getElementById('artigo-content');
    const closeArticlePopup = document.getElementById('fechar-artigo-popup');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.dataset.content;
            const title = button.dataset.title;

            // Cria um novo elemento div para o conteúdo do popup
            const popupContent = document.createElement('div');
            popupContent.classList.add('popup-artigo-content');
            
            // Cria um novo elemento h3 para o título
            const popupTitle = document.createElement('h3');
            popupTitle.textContent = title;

            // Remove o título do conteúdo do popup
            let cleanedContent = content.replace(/<h3>(.*?)<\/h3>/g, ''); 

            // Adiciona o conteúdo do popup ao novo elemento div
            popupContent.appendChild(popupTitle);
            // Use innerHTML para inserir o conteúdo HTML
            popupContent.innerHTML += cleanedContent; 

            // Adiciona o novo elemento div ao popup
            articleContent.innerHTML = ''; // Limpa o conteúdo anterior
            articleContent.appendChild(popupContent);

            articlePopup.style.display = 'flex';
        });
    });

    // Fecha o popup do artigo
    closeArticlePopup.addEventListener('click', () => {
        articlePopup.style.display = 'none';
    });
});