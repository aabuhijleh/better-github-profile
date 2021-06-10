import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { getTheme } from "src/styles/themes";
import { GlobalStyle } from "src/styles/global";
import { usePersistentStore } from "src/store";

export const App: React.FC = () => {
  const mode = usePersistentStore((state) => state.mode);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <GlobalStyle />
    </ThemeProvider>
  );
};
