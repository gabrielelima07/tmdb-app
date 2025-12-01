# MovieFree

## Descrição

Este aplicativo é um catálogo de séries de TV que permite ao usuário buscar informações sobre shows, navegar por categorias em carrosséis, marcar favoritos e acessar detalhes de cada série. O app resolve o problema de centralizar e facilitar a consulta de informações sobre séries, integrando dados de uma API pública e oferecendo uma experiência moderna com navegação intuitiva.

---

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile multiplataforma.
- **Expo**: Plataforma que facilita o desenvolvimento, build e deploy do app.
- **JavaScript**: Linguagem principal usada no desenvolvimento.

---

## Bibliotecas e Módulos do Expo

O projeto utiliza as seguintes bibliotecas/módulos do Expo:

- **expo-router**: Gerenciamento de rotas e navegação baseada em arquivos.
- **expo-linear-gradient**: Para criar efeitos de gradiente visual nas telas.
- **expo-font**: Para carregar e usar fontes personalizadas no app.
- **expo-asset**: Gerenciamento de assets como imagens e ícones.
- **expo-status-bar**: Controle da barra de status do dispositivo.

---

## API Consumida

O aplicativo consome a API pública **TVMaze** para obter dados como:

- Informações detalhadas sobre séries (nome, sinopse, imagem, gêneros).
- Episódios e temporadas.
- Busca por nome de série.
- Dados de elenco e canais.

---

## Estrutura de Navegação

A navegação do aplicativo é composta por:

- **Drawer Navigation (Menu lateral)**: Localizado no arquivo `app/_layout.js`, onde estão as opções de menu que dão acesso rápido às principais seções do app.

- **Modal**: Componente flutuante usado para exibir informações adicionais, como detalhes de um show ou confirmações, implementado em uma tela modal (`app/modal.js`).

- **Tabs (Duas abas)**: Definidas no diretório `app/tabs/` com as telas principais do app, como `tab1.js` e `tab2.js`. Elas permitem navegação rápida entre diferentes seções, como a lista de shows e a busca.

---

## Estrutura de Pastas (resumo)

app/
├── _layout.js # Layout principal com Drawer
├── modal.js # Tela modal
├── tabs/
│ ├── _layout.js # Layout das Tabs
│ ├── tab1.js # Primeira aba (ex: Home ou lista)
│ └── tab2.js # Segunda aba (ex: Buscar)
components/
├── CarouselNetflix.js # Componente carrossel estilo Netflix
├── ShowCard.js # Cartão de exibição dos shows
...


---

## Como Rodar o Projeto

1. Clone o repositório
2. Rode `npm install` ou `yarn` para instalar dependências
3. Inicie o projeto com `expo start`
4. Abra no seu dispositivo ou emulador via QR code ou simulador

---


