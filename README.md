# 🎬 ReelVault

**ReelVault** é uma aplicação moderna de catálogo de filmes, inspirada em plataformas como **Netflix**, construída com **React + Vite + Tailwind CSS** e integrada à **API do TMDB**. O projeto foi desenvolvido para oferecer uma experiência sofisticada, responsiva e amigável, permitindo aos usuários buscar, explorar e favoritar filmes com praticidade.

-----

## ✨ Funcionalidades

  - 🔎 **Busca inteligente** de filmes na barra de navegação.
  - 🏠 **Página inicial** com filmes populares e seções dinâmicas por gênero.
  - 🎭 **Exploração por gênero** com paginação.
  - ⭐ **Lista de favoritos** com persistência em `localStorage`.
  - 🧾 **Detalhes do filme** (sinopse, elenco, diretor, avaliação, etc.).
  - 🎯 **Recomendações personalizadas** com base nos filmes favoritos do usuário.
  - 🌍 **Suporte multi-idioma** (Português 🇧🇷 / Inglês 🇺🇸).
  - 📱 **Design responsivo** adaptável para desktop, tablet e mobile.
  - 🎨 **Tema cinematográfico** com paleta de cores moderna.

-----

## 🚀 Tecnologias

  - ⚡ **React 18** com **Vite**
  - 🎨 **Tailwind CSS**
  - 🔗 **React Router v6**
  - 🎥 **TMDB API**
  - 🌍 **i18next**
  - 💾 **localStorage**
  - 📦 **Axios**

-----

## ⚙️ Instalação e Configuração

Siga os passos abaixo para rodar o projeto em sua máquina local.

### 1\. Pré-requisitos

  - Node.js (v18.x ou superior)
  - npm

### 2\. Clonar o repositório e instalar dependências

```bash
git clone https://github.com/seu-usuario/reelvault.git
cd reelvault
npm install
```

### 3\. Configurar a API do TMDB

Este projeto utiliza a **[TMDB API](https://developer.themoviedb.org/)**. Você precisará de uma chave de API para buscar os dados de filmes.

  - Crie uma conta no [TMDB](https://www.themoviedb.org/).
  - Vá em **Settings \> API \> Create API Key** para gerar sua chave v3.
  - Na raiz do projeto, crie um arquivo chamado **`.env`** e adicione sua chave:

<!-- end list -->

```env
VITE_TMDB_API_KEY=SUA_CHAVE_AQUI
```

### 4\. Rodar a aplicação

```bash
npm run dev
```

A aplicação estará disponível em 👉 `http://localhost:5173`

-----

## 📂 Estrutura de Pastas

```
reelvault/
│── public/
│── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│── .env.example
│── tailwind.config.js
│── package.json
└── ...
```

-----

## 📌 Roadmap (melhorias futuras)

  - Autenticação de usuários (login/cadastro).
  - Integração com a API do JustWatch para mostrar onde assistir aos filmes.
  - Dark/Light Mode toggle.
  - Avaliação de filmes pelos usuários.

-----

## 🤝 Contribuição

Sinta-se à vontade para contribuir\! Siga os passos:

1.  Faça um *fork* do projeto.
2.  Crie uma nova *branch* (`git checkout -b feature/minha-feature`).
3.  Faça *commit* das suas mudanças (`git commit -m 'feat: adicionei nova funcionalidade'`).
4.  Envie para a sua *branch* (`git push origin feature/minha-feature`).
5.  Abra um *Pull Request*.

-----

## 📜 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----

## 👨‍💻 Autor

Feito por **Carlos Guilherme Alves Agripino**

📧 Entre em contato: **`guilhermeagripino@gmail.com`**
