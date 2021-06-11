import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { GlobalStyle } from "src/styles/global";
import { usePersistentStore } from "src/store";

const Wrapper = styled.div`
  display: grid;

  font-size: 3rem; // for testing

  grid-template-rows: 10rem;
  grid-template-columns:
    [full-start] 1fr [content-start] minmax(min-content, 120rem)
    [content-end] 1fr [full-end];

  & > * {
    grid-column: content-start / content-end;
  }

  & .header {
    background-color: palegoldenrod;
    height: 10rem;
  }

  & .profile {
    display: grid;
    grid-template-columns: 1fr 3fr;

    &__details {
      background-color: orangered;
      padding: 10rem;
    }

    &__readme {
      background-color: palevioletred;
      padding: 10rem;
    }
  }

  & #about {
    background-color: powderblue;
    padding: 10rem;
  }

  & #jobs {
    background-color: salmon;
    padding: 10rem;
  }

  & #projects {
    background-color: whitesmoke;
    padding: 10rem;
  }

  & #contact {
    background-color: tomato;
    padding: 10rem;
  }

  & .footer {
    background-color: turquoise;
    padding: 10rem;
  }
`;

export const App: React.FC = () => {
  const mode = usePersistentStore((state) => state.mode);

  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyle />

      <Wrapper>
        <nav className="header">header</nav>

        <main className="profile">
          <div className="profile__details">my profile</div>
          <div className="profile__readme">my readme</div>
        </main>

        <section id="about">about</section>

        <section id="jobs">jobs</section>

        <section id="projects">projects</section>

        <section id="contact">contact</section>

        <footer className="footer">footer</footer>
      </Wrapper>
    </ThemeProvider>
  );
};
