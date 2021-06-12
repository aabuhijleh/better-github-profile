import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { GlobalStyle } from "src/styles/global";
import { usePersistentStore } from "src/store";
import { Profile } from "src/components/Profile";
import { Grid } from "src/components/layout/Grid";
import { Navbar } from "src/components/layout/Navbar";
import { About } from "src/components/sections/About";
import { Jobs } from "src/components/sections/Jobs";

export const App: React.FC = () => {
  const mode = usePersistentStore((state) => state.mode);

  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyle />
      <Grid>
        <Navbar />
        <Profile />
        <About />
        <Jobs />
      </Grid>
    </ThemeProvider>
  );
};
