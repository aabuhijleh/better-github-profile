import theme from "styled-theming";

export const bodyBgColor = theme("mode", {
  light: "#ffffff",
  dark: "#0e1117",
});

export const textColor = theme("mode", {
  light: "#24292e",
  dark: "#c9d1d9",
});

export const textSecondayColor = theme("mode", {
  light: "#586069",
  dark: "#8b949e",
});

export const linkBlueColor = theme("mode", {
  light: "#0366d6",
  dark: "#58a6ff",
});

export const borderColor = theme("mode", {
  light: "#eaecef",
  dark: "#21262d",
});

// TODO: set correct light mode values

export const primaryColor = theme("mode", {
  light: "#2ea043",
  dark: "#2ea043",
});

export const btnPrimaryBgColor = theme("mode", {
  light: "#238636",
  dark: "#238636",
});

export const btnPrimaryBorderColor = theme("mode", {
  light: "#2ea043",
  dark: "#2ea043",
});

export const btnPrimaryHoverBgColor = theme("mode", {
  light: "#2ea043",
  dark: "#2ea043",
});

export const btnPrimaryHoverBorderColor = theme("mode", {
  light: "#3fb950",
  dark: "#3fb950",
});

export const selectedTextBgColor = theme("mode", {
  light: "#1f6feb",
  dark: "#1f6feb",
});
