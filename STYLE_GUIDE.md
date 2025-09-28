# Groot Pesquisa - Guia de Estilo e Sistema de Design v2.0

## 1. Princípios de Design

Este guia de estilo define a identidade visual e os componentes da interface do usuário para o "Groot Pesquisa". Nosso design é construído sobre dois princípios principais: **Claridade** e **Profundidade**.

- **Claridade:** A interface deve ser intuitiva e legível, mesmo com a complexidade visual do fundo.
- **Profundidade:** Utilizamos camadas, desfoque e sombras para criar uma hierarquia visual clara, dando ao usuário uma sensação de espaço e contexto.

### Efeito Principal: Glassmorphism (Vidro Fosco)

O *Glassmorphism* é o pilar do nosso design. Ele é aplicado a superfícies de interface como cabeçalhos, pop-ups e cartões para criar um efeito de "vidro fosco" sobre um fundo dinâmico e desfocado. Isso cria uma sensação de profundidade e modernidade.

- **Implementação:** Usamos a propriedade `backdrop-filter: blur(Xpx);` juntamente com um `background-color` semi-transparente.

---

## 2. Tokens de Design

Tokens são as variáveis CSS que mantêm nosso sistema consistente. Eles são a base para cores, espaçamento, sombras e muito mais.

### Paleta de Cores (Modo Escuro)

Nossa paleta é otimizada para um ambiente escuro, garantindo legibilidade e apelo visual.

#### Cores Primárias (Roxo)
Usadas para ações principais, links e indicadores de foco.

- `var(--primary-400)`: `#AC8AE4` (Para indicadores de foco e hover)
- `var(--primary-600)`: `#7A4EDA` (Cor base para botões e links)

#### Cores Neutras (Tons de Cinza e Branco)
Usadas para texto, fundos de superfície e bordas.

- `var(--neutral-100)`: `#F8F9FA` (Texto de alto contraste)
- `var(--neutral-300)`: `#DEE2E6` (Texto de médio contraste, descrições)
- `var(--neutral-900)`: `#212529` (Cor base para fundos escuros de texto)

### Tipografia

A fonte principal é a `Chakra Petch`. A escala é projetada para legibilidade em fundos escuros.

- **Título Principal (h2):** `1.88rem`, negrito (`700`), com `text-shadow` para se destacar do fundo.
- **Título do Cartão (h3):** `1.5rem`, seminegrito (`600`), cor `var(--primary-100)`.
- **Corpo do Texto:** `1rem`, regular (`400`), cor `var(--neutral-300)`.

### Sistema de Elevação (Sombras)

Usamos sombras para simular a elevação dos elementos em relação ao fundo. Quanto maior a elevação, mais difusa e ampla é a sombra.

- `var(--shadow-md)`: **Elevação Baixa.** Usado para componentes estáticos como cartões.
- `var(--shadow-lg)`: **Elevação Média.** Usado em estados de `hover` para indicar interatividade.
- `var(--shadow-xl)`: **Elevação Alta.** Reservado para elementos que flutuam acima de todo o resto, como a barra de pesquisa e pop-ups.

### Espaçamento

Nosso sistema de espaçamento é baseado em uma escala de `8px` para garantir ritmo e consistência.

- `var(--space-1)`: `8px`
- `var(--space-2)`: `16px`
- `var(--space-3)`: `24px`
- ... e assim por diante.

---

## 3. Biblioteca de Componentes

Esta seção detalha os principais componentes da interface e como eles devem ser utilizados.

### Cabeçalho (`.header-background`)

- **Descrição:** Uma barra fixa no topo da página com navegação principal.
- **Efeito:** *Glassmorphism* com desfoque de `12px` e um fundo translúcido (`rgba(30, 25, 45, 0.5)`).
- **Borda:** Uma borda inferior sutil (`1px solid rgba(255, 255, 255, 0.08)`) para separá-lo do conteúdo.

### Barra de Pesquisa (`.pesquisar-bar`)

- **Descrição:** O principal ponto de interação para o usuário.
- **Efeito:** *Glassmorphism* com desfoque de `12px` e um fundo de vidro claro (`rgba(255, 255, 255, 0.1)`).
- **Elevação:** Usa `--shadow-xl` para parecer flutuar sobre a página, atraindo o foco.

### Cartão de Artigo (`.artigo`)

- **Descrição:** Exibe uma prévia de um artigo.
- **Efeito:** Um sutil *Glassmorphism* com desfoque de `5px` e um fundo escuro translúcido.
- **Interação:** Ao passar o mouse (`:hover`), sua elevação aumenta para `--shadow-lg` e uma borda de destaque (`--primary-600`) aparece, indicando que é clicável.

### Pop-up (`.popup` e `.popup-content`)

- **Descrição:** Uma janela modal para exibir conteúdo detalhado (como um artigo) ou notificações.
- **Efeito:** O fundo do pop-up (`.popup`) usa um desfoque de `10px` em toda a página para focar a atenção do usuário. O contêiner de conteúdo (`.popup-content`) tem um efeito de vidro mais intenso com desfoque de `15px`.
- **Elevação:** Usa `--shadow-xl` para se destacar como a camada superior da interface.

---

## 4. Animações e Micro-interações

- **Transições:** Todas as interações (`hover`, `focus`) usam uma transição suave de `0.2s`, definida em `var(--transition-speed)`.
- **Animação de Carregamento (Skeleton):** Usa uma animação de brilho (`shimmer`) em placeholders que imitam a estrutura do conteúdo real. Isso melhora a percepção de performance durante o carregamento.
- **Feedback de Ação:** Botões têm um efeito de `scale(0.95)` no estado `:active` para fornecer feedback tátil imediato ao clique.