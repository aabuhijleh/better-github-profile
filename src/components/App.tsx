import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { GlobalStyle } from "src/styles/global";
import { usePersistentStore, useStore } from "src/store";
import { useReadmeQuery, useUserQuery } from "src/generated/graphql";
import { Markdown } from "src/components/Markdown";

const DIV = styled.div`
  font-size: 1.6rem;
  & * {
    margin: revert;
  }
`;

export const App: React.FC = () => {
  const username = useStore((state) => state.username);
  const mode = usePersistentStore((state) => state.mode);

  const { data } = useUserQuery({ variables: { username } });
  const { data: readmeData } = useReadmeQuery({ variables: { username } });

  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyle />
      <pre>{JSON.stringify(data?.user, null, 2)}</pre>
      <DIV>
        <Markdown
          text={
            readmeData?.repository?.object?.__typename === "Blob"
              ? readmeData?.repository?.object?.text!
              : ""
          }
        />
      </DIV>
    </ThemeProvider>
  );
};
