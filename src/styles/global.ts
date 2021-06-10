import { createGlobalStyle } from "styled-components/macro";
import { bodyBackgroundColor, textColor } from "src/styles/theme";

export const GlobalStyle = createGlobalStyle`
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
    background-color: ${bodyBackgroundColor};
    color: ${textColor};
    font-weight: 400;
    line-height: 1.6;
    min-height: 100vh;
  }
`;
