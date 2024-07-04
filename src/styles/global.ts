import { createGlobalStyle } from 'styled-components'
import firaCode from '../assets/fonts/Fira_Code/FiraCode-VariableFont_wght.ttf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  code {
    font-family: 'FiraCode', monospace;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.color['base-label']};
    }

    body {
      background-color: ${(props) => props.theme.color['base-background']};
      color: ${(props) => props.theme.color['base-text']};
      -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button {
      font: 400 1rem 'Nunito', sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
    }

      button {
        cursor: pointer;
    }

    ul {
    list-style: none;
  }
`
