import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { GlobalStyle } from "src/styles/global";
import { usePersistentStore } from "src/store";
import { Profile } from "src/components/Profile";
import { Grid } from "src/Layout/Grid";
import { Navbar } from "src/Layout/Navbar";

export const App: React.FC = () => {
  const mode = usePersistentStore((state) => state.mode);

  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyle />
      <Grid>
        <Navbar />
        <Profile />
      </Grid>
    </ThemeProvider>
  );
};
