import React from "react";
import { Markdown } from "src/components/Markdown";
import { useReadmeQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 3rem 0;
  transition: var(--transition);
  font-size: var(--fz-sm);

  & * {
    margin: revert;
    padding: revert;
  }
`;

export const ProfileReadme: React.FC = () => {
  const username = useStore((state) => state.username);
  const { data, loading, error } = useReadmeQuery({
    variables: { username },
  });

  if (data?.repository?.object?.__typename === "Blob") {
    const content = data?.repository.object.text as string;

    return (
      <Wrapper>
        <Markdown text={content} />
      </Wrapper>
    );
  }

  if (loading) {
    return <Wrapper>Loading...</Wrapper>;
  }

  if (error) {
    return <Wrapper>⚠️ Could not get your GitHub profile data</Wrapper>;
  }

  return null;
};
