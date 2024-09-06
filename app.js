document.addEventListener('DOMContentLoaded', function () {
    // Função para abrir o popup
    function openPopup() {
        document.getElementById('popup').style.display = 'flex';
    }

    // Função para fechar o popup
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
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
});
