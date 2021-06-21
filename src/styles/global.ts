import { createGlobalStyle, css } from "styled-components/macro";
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
    --content-padding: 5rem;

    @media only screen and (max-width: 768px) {
      --content-padding: 2.5rem;
    }
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

    @media only screen and (max-width: 500px) {
      font-size: 50%;
    }

    @media only screen and (max-width: 400px) {
      font-size: 40%;
    }

    *::-webkit-scrollbar {
      width: 12px;
    }

    *::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-color);
      border: 3px solid ${bodyBgColor};
      border-radius: 10px;
    }

    *::-webkit-scrollbar-track {
      background: ${bodyBgColor};
    }
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

    &.blur {
      overflow: hidden;

      & #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
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
    color: #fff;
    background-color: ${selectedTextBgColor};
  }

  svg {
    vertical-align: middle;
  }

  // skeleton styling in dark mode
  ${(p) =>
    p.theme.mode === "dark" &&
    css`
      .ssc-circle,
      .ssc-head-line,
      .ssc-line,
      .ssc-square {
        background-color: rgba(170, 170, 170, 0.17);
      }

      .ssc-circle::after,
      .ssc-head-line::after,
      .ssc-line::after,
      .ssc-square::after {
        background: linear-gradient(
          90deg,
          transparent,
          hsla(0, 0%, 100%, 0.1),
          transparent
        );
      }
    `}

  // react toggle styling
    .mode-toggle.react-toggle--checked .react-toggle-track {
    background-color: var(--mode-toggle-color);
  }

  .mode-toggle.react-toggle--checked:hover .react-toggle-track {
    background-color: var(--mode-toggle-color);
  }

  .mode-toggle.react-toggle:hover .react-toggle-track {
    background-color: var(--mode-toggle-color);
  }

  .mode-toggle .react-toggle-track-check {
    left: 6px;
  }

  .mode-toggle .react-toggle-track-x {
    right: 22px;
  }
`;
