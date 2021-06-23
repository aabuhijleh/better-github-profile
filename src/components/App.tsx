import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { GlobalStyle } from "src/styles/global";
import { useStore, usePersistentStore } from "src/store";
import { Profile } from "src/components/Profile";
import { Content } from "src/components/layout/Grid";
import { Navbar } from "src/components/layout/Navbar";
import { About } from "src/components/sections/About";
import { Jobs } from "src/components/sections/Jobs";
import { FeaturedProjects } from "src/components/sections/FeaturedProjects";
import { OtherProjects } from "src/components/sections/OtherProjects";
import { Contact } from "src/components/sections/Contact";
import { Footer } from "src/components/layout/Footer";

export const App: React.FC = () => {
  const mode = usePersistentStore((state) => state.mode);
  const setSidebarShown = useStore((state) => state.setSidebarShown);

  const hideSidebar = () => setSidebarShown(false);

  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyle />
      <Navbar />
      <Content id="content" onClick={hideSidebar}>
        <Profile />
        <About />
        <Jobs />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
        <Footer />
      </Content>
    </ThemeProvider>
  );
};
