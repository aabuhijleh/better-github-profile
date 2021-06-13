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

export const linkBlueBgColor = theme("mode", {
  light: "rgb(3, 102, 214, 0.1)",
  dark: "rgb(88, 166, 255, 0.1)",
});

export const borderColor = theme("mode", {
  light: "#eaecef",
  dark: "#21262d",
});

// TODO: set correct light mode values

export const selectedTextBgColor = theme("mode", {
  light: "#0a72e7",
  dark: "#1f6feb",
});

export const warningTextColor = theme("mode", {
  light: "#b08800",
  dark: "#ffc107",
});
