// script.js
document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('groot-notification');
    const closeButton = document.getElementById('close-notification');

    // Função para mostrar a notificação
    function showNotification() {
        notification.style.display = 'flex';
    }

    // Função para fechar a notificação
    function closeNotification() {
        notification.style.display = 'none';
    }

    // Adiciona um evento ao botão de fechar
    closeButton.addEventListener('click', closeNotification);

    // Exibe a notificação quando a página carrega
    showNotification();

    // Implementa o fechamento automático após 10 segundos
    setTimeout(closeNotification, 10000);
});
