# 🚀 React + Vite Boilerplate

Welcome to the ultimate React + Vite boilerplate! This setup provides a blazing fast development environment with Hot Module Replacement (HMR) and a robust set of ESLint rules to keep your code clean and error-free.

## 📦 What's Inside?

This boilerplate includes:

- **Vite**: Lightning-fast build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **ESLint**: Linting utility for JavaScript and JSX.
- **Prettier**: Code formatter to maintain consistent style.
- **Husky**: Git hooks for pre-commit linting.
- **lint-staged**: Run linters on git-staged files.
- **@vitejs/plugin-react**: Official Vite plugin using Babel for Fast Refresh.
- **@vitejs/plugin-react-swc**: Official Vite plugin using SWC for Fast Refresh (optional).

## 🚀 Quick Start

Get up and running with these simple steps:

1. **Clone the repository:**

      ```sh
      git clone https://github.com/your-username/react-vite-boilerplate.git
      cd react-vite-boilerplate
      ```

2. **Install dependencies:**

      ```sh
      npm install
      # or
      yarn install
      ```

3. **Start the development server:**

      ```sh
      npm run dev
      # or
      yarn dev
      ```

      Your app should now be running on [http://localhost:3000](http://localhost:3000)!

## 📂 Project Structure

Here's a quick look at the project structure:

```sh
.
├── public              # Static assets
├── src
│   ├── assets          # Images, fonts, etc.
│   ├── components      # Reusable UI components
│   ├── pages           # Page components
│   ├── App.jsx         # Main application component
│   ├── index.jsx       # Entry point for React
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── vite.config.js      # Vite configuration
├── package.json        # Project metadata and dependencies
└── README.md           # This file!
```

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the development server with HMR.

### `npm run build`

Builds the app for production.

### `npm run preview`

Locally preview the production build.

### `npm run lint`

Runs ESLint to analyze the code.

### `npm run format`

Formats the code using Prettier.

## 🌟 Features

- **Fast Development**: With Vite's HMR, see your changes instantly!
- **Clean Code**: ESLint and Prettier ensure your code stays clean and consistent.
- **Git Hooks**: Husky and lint-staged help prevent bad commits.
- **Flexible Configuration**: Easily switch between Babel and SWC for Fast Refresh.

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
