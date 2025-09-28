document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    //  1. CONFIGURAÇÃO INICIAL E DADOS
    // ====================================================================

    const articlesContainer = document.querySelector('.artigos-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchMessage = document.querySelector('.pesquisar-message');

    let debounceTimer;

    const allArticles = [
        {
            img: '/img/javascript.jpg',
            title: 'Introdução ao JavaScript',
            description: 'Aprenda os fundamentos da linguagem JavaScript, essencial para o desenvolvimento web.',
            content: `
                <p>JavaScript é uma linguagem de programação interpretada, frequentemente utilizada para adicionar interatividade a páginas da web. Essa linguagem é essencial para criar animações, efeitos visuais, validações de formulários, jogos e muito mais. É uma das tecnologias mais importantes para o desenvolvimento web moderno.</p>
                <p>No curso a seguir você aprenderá desde os conceitos básicos da linguagem, como variáveis, tipos de dados, operadores e estruturas de controle, até o uso de bibliotecas populares como jQuery e frameworks como React e Angular.</p>
                <p>Aprenda JavaScript do zero e comece a construir páginas web interativas e dinâmicas e de forma gratuita.</p>
            `
        },
        {
            img: '/img/style-css.jpg',
            title: 'Fundamentos de CSS',
            description: 'Domine as técnicas de estilo com CSS para criar designs atraentes e responsivos para seus sites.',
            content: `
                <p>CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a aparência de páginas web. Com o CSS, você pode controlar a forma, a cor, o tamanho, o posicionamento, a fonte e muitos outros aspectos visuais dos seus elementos web.</p>
                <p>No curso a seguir você aprenderá os conceitos básicos de CSS, como seletores, propriedades e valores, além de explorar técnicas avançadas como layouts responsivos, animações, transições e muito mais.</p>
                <p>Aprenda CSS e transforme seus projetos web em sites visualmente atraentes e adaptáveis para diferentes dispositivos e de forma gratuita.</p>
            `
        },
        {
            img: '/img/html.jpg',
            title: 'O que é HTML?',
            description: 'Entenda os princípios básicos da linguagem HTML, a base de todas as páginas web.',
            content: `
                <p>HTML (HyperText Markup Language) é a linguagem de marcação utilizada para criar a estrutura básica de páginas da web. É como a base de um edifício, definindo a organização e o conteúdo de cada página.</p>
                <p>No curso a seguir você aprenderá a construir páginas web básicas com HTML, aprendendo a criar elementos como títulos, parágrafos, listas, tabelas, imagens, links e muito mais.</p>
                <p>Aprenda HTML e dê o primeiro passo para se tornar um desenvolvedor web, construindo páginas web que funcionam perfeitamente e de forma gratuita.</p>
            `
        }
    ];

    // ====================================================================
    //  2. FUNÇÕES DE RENDERIZAÇÃO
    // ====================================================================

    function renderSkeleton() {
        articlesContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const skeletonArticle = `
                <article class="artigo">
                    <div class="artigo-imagem skeleton"></div>
                    <h3 class="artigo-titulo skeleton skeleton-text"></h3>
                    <p class="artigo-descricao skeleton skeleton-text"></p>
                    <p class="artigo-descricao skeleton skeleton-text"></p>
                    <div class="leia-mais skeleton" style="width: 100px; height: 38px;"></div>
                </article>
            `;
            articlesContainer.innerHTML += skeletonArticle;
        }
    }

    function renderArticles(articlesToRender) {
        articlesContainer.innerHTML = '';

        if (articlesToRender.length === 0) {
            articlesContainer.innerHTML = `<p class="pesquisar-message" style="grid-column: 1 / -1; text-align: center;">Nenhum resultado encontrado para sua busca.</p>`;
            return;
        }

        articlesToRender.forEach(article => {
            const articleElement = `
                <article class="artigo">
                    <img src="${article.img}" alt="Imagem de ${article.title}" class="artigo-imagem">
                    <h3 class="artigo-titulo">${article.title}</h3>
                    <p class="artigo-descricao">${article.description}</p>
                    <a href="#" class="leia-mais" role="button" data-title="${article.title}">Leia mais</a>
                </article>
            `;
            articlesContainer.innerHTML += articleElement;
        });

        initArticlePopup();
    }

    // ====================================================================
    //  3. FUNCIONALIDADES DE INTERAÇÃO
    // ====================================================================

    function initSearch() {
        const handleSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            searchMessage.textContent = query ? `Resultados para: "${searchInput.value}"` : '';

            const filteredArticles = allArticles.filter(article => {
                const title = article.title.toLowerCase();
                const description = article.description.toLowerCase();
                return title.includes(query) || description.includes(query);
            });

            renderArticles(filteredArticles);
        };

        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(handleSearch, 300);
        });

        searchButton.addEventListener('click', handleSearch);

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleSearch();
            }
        });
    }

    function initPopups() {
        const warningPopup = document.getElementById('aviso_groot');
        const closeWarningPopup = document.getElementById('fechar-popup');
        if (warningPopup && closeWarningPopup) {
            setTimeout(() => warningPopup.style.display = 'flex', 500);
            closeWarningPopup.addEventListener('click', () => warningPopup.style.display = 'none');
        }

        initArticlePopup();
    }

    function initArticlePopup() {
        const readMoreButtons = document.querySelectorAll('.leia-mais');
        const articlePopup = document.getElementById('artigo-popup');
        const articleContent = document.getElementById('artigo-content');
        const closeArticlePopup = document.getElementById('fechar-artigo-popup');

        readMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const title = button.dataset.title;
                const articleData = allArticles.find(art => art.title === title);

                if (articleData) {
                    const popupHTML = `
                        <div class="popup-artigo-content">
                            <h3 id="artigo-titulo-popup">${articleData.title}</h3>
                            ${articleData.content}
                        </div>
                    `;
                    articleContent.innerHTML = popupHTML;
                    articlePopup.style.display = 'flex';
                }
            });
        });

        if(closeArticlePopup) {
            closeArticlePopup.addEventListener('click', () => {
                articlePopup.style.display = 'none';
            });
        }
    }

    // ====================================================================
    //  4. INICIALIZAÇÃO GERAL
    // ====================================================================
    
    function init() {
        renderSkeleton();
        setTimeout(() => {
            renderArticles(allArticles);
            initSearch();
            initPopups();
        }, 1500);
    }

    init();
});
