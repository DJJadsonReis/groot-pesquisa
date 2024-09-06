// Seleciona os elementos necessários
const searchButton = document.getElementById('search-button');
const searchInput = document.querySelector('.pesquisar-bar input');
const searchMessage = document.querySelector('.pesquisar-message');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Função para mostrar o popup
function showPopup() {
    popup.style.display = 'flex';
}

// Função para ocultar o popup
function hidePopup() {
    popup.style.display = 'none';
}

// Adiciona evento de clique no botão de pesquisa
searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value.trim();
    if (searchValue === '') {
        searchMessage.textContent = 'Por favor, digite um termo de pesquisa.';
    } else {
        searchMessage.textContent = `Você pesquisou por: ${searchValue}`;
    }
});

// Adiciona evento para fechar o popup
closePopup.addEventListener('click', hidePopup);

// Exibe o popup após 5 segundos (ajuste conforme necessário)
setTimeout(showPopup, 20);

// Adiciona evento para buscar ao pressionar a tecla Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});