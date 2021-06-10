import { Mode } from "src/types";
import { DefaultTheme } from "styled-components/macro";

export const lightTheme: DefaultTheme = {
  colors: {
    bg: "#ffffff",
    text: "#24292e",
    textSecondary: "#586069",
    linkBlue: "#0366d6",
    border: "#eaecef",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    bg: "#0e1117",
    text: "#c9d1d9",
    textSecondary: "#8b949e",
    linkBlue: "#58a6ff",
    border: "#21262d",
  },
};

export const getTheme = (mode: Mode) => {
  if (mode === "light") return lightTheme;
  return darkTheme;
};
