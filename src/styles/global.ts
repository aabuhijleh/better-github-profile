import { createGlobalStyle } from "styled-components/macro";
import {
  bodyBgColor,
  linkBlueColor,
  selectedTextBgColor,
  textColor,
} from "src/styles/theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-default: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, SF Mono, Consolas,
      Liberation Mono, Menlo, monospace;
    --fz-xxs: 1.2rem;
    --fz-xs: 1.3rem;
    --fz-sm: 1.4rem;
    --fz-md: 1.6rem;
    --fz-lg: 1.8rem;
    --fz-xl: 2rem;
    --fz-xxl: 2.2rem;
    --fz-heading: 3.2rem;
    --border-radius: 4px;
    --nav-height: 10rem;
    --nav-logo-size: 4.2rem;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --hamburger-width: 3rem;
    --mode-toggle-color: #4d4d4d;
    --scrollbar-color: #4d4d4d;
    --shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.8);
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-weight: 400;
    font-family: var(--font-default);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${textColor};
    background-color: ${bodyBgColor};

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-color);
      border: 3px solid ${bodyBgColor};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${bodyBgColor};
    }
  }

  :focus {
    outline: 2px dashed ${linkBlueColor};
    outline-offset: 3px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  *::selection {
    color: ${textColor};
    background-color: ${selectedTextBgColor};
  }

  svg {
    vertical-align: middle;
  }
`;
