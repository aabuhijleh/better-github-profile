import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { GlobalStyle } from "src/styles/global";
import { usePersistentStore, useStore } from "src/store";
import { useUserQuery } from "src/generated/graphql";

export const App: React.FC = () => {
  const username = useStore((state) => state.username);
  const mode = usePersistentStore((state) => state.mode);

  const test = useUserQuery({ variables: { username } });

  console.log("testinnnnng", test);

  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyle />
    </ThemeProvider>
  );
};
