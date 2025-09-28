
# Groot Pesquisa - Guia de Estilo

Este documento descreve o sistema de design para o projeto Groot Pesquisa. Ele fornece um conjunto de padrões para tipografia, cor, espaçamento e componentes para garantir uma interface de usuário consistente e acessível.

## 1. Paleta de Cores

A paleta de cores foi projetada para clareza e acessibilidade (compatível com WCAG AA). Inclui cores primárias, neutras e semânticas, cada uma com uma escala de 9 tons.

### Cores Primárias (Roxo)

Usadas para elementos interativos e ações principais.

- **Primary 100:** `#EAE2F8`
- **Primary 200:** `#D5C5F1`
- **Primary 300:** `#C0A7EB`
- **Primary 400:** `#AC8AE4`
- **Primary 500:** `#976CEE`
- **Primary 600:** `#7A4EDA` (Base)
- **Primary 700:** `#5F39B6`
- **Primary 800:** `#472A8C`
- **Primary 900:** `#301C62`

### Cores Neutras (Cinza)

Usadas para texto, fundos e bordas.

- **Neutral 100:** `#F8F9FA` (Cinza Mais Claro)
- **Neutral 200:** `#E9ECEF`
- **Neutral 300:** `#DEE2E6`
- **Neutral 400:** `#CED4DA`
- **Neutral 500:** `#ADB5BD`
- **Neutral 600:** `#6C757D` (Base)
- **Neutral 700:** `#495057`
- **Neutral 800:** `#343A40`
- **Neutral 900:** `#212529` (Cinza Mais Escuro / Texto)

### Cores Semânticas

Usadas para transmitir status ou informação.

- **Sucesso:** `#28A745`
- **Aviso:** `#FFC107`
- **Erro:** `#DC3545`

---

## 2. Tipografia

A escala tipográfica é baseada em uma proporção de `1.25` e usa a família de fontes `Chakra Petch`.

- **Tamanho da Fonte Base:** `16px`

| Elemento | Tamanho da Fonte (px/rem) | Peso da Fonte | Altura da Linha | Espaçamento entre Letras |
|---|---|---|---|---|
| Título 1 | `37px / 2.31rem` | 700 (Negrito) | 1.2 | -0.02em |
| Título 2 | `30px / 1.88rem` | 700 (Negrito) | 1.2 | -0.02em |
| Título 3 | `24px / 1.5rem` | 600 (Seminegrito) | 1.2 | -0.02em |
| Corpo | `16px / 1rem` | 400 (Regular) | 1.5 | 0 |
| UI/Botão | `15px / 0.94rem` | 600 (Seminegrito) | 1.4 | 0 |
| Texto Pequeno | `12px / 0.75rem` | 400 (Regular) | 1.4 | +0.05em |

---

## 3. Espaçamento e Dimensionamento

Um sistema de grade consistente de 8px é usado para todas as margens, preenchimentos e espaçamento de layout. A unidade base é `8px`.

- **`--space-1`:** `8px`
- **`--space-2`:** `16px`
- **`--space-3`:** `24px`
- **`--space-4`:** `32px`
- **`--space-5`:** `48px`
- **`--space-6`:** `64px`

---

## 4. Componentes

Estilos padronizados para componentes comuns da interface do usuário.

### Raio da Borda

- **`--radius-sm`:** `4px` (para entradas, botões pequenos)
- **`--radius-md`:** `8px` (para cartões, pop-ups)
- **`--radius-lg`:** `16px` (para contêineres maiores)
- **`--radius-full`:** `9999px` (para elementos em forma de pílula)

### Sombras

- **`--shadow-sm`:** `0 2px 4px rgba(0,0,0,0.05)`
- **`--shadow-md`:** `0 4px 8px rgba(0,0,0,0.1)`
- **`--shadow-lg`:** `0 10px 20px rgba(0,0,0,0.15)`

### Botões

- **Altura:** `40px`
- **Preenchimento:** `0 16px`
- **Estados:** Estilos para `hover`, `active`, `focus` são definidos para feedback claro ao usuário.

### Cartões

- **Preenchimento:** `24px`
- **Borda:** `1px solid var(--neutral-300)`
- **Sombra:** `var(--shadow-md)`
