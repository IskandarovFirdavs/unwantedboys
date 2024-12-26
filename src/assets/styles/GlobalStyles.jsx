import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    transition: all 0.3s ease-in-out;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1.6rem;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.secondary};
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .text-gradient {
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default GlobalStyles;
