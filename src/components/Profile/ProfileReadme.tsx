import React from "react";
import { LinkUnderline } from "src/components/ui/Link";
import { Markdown } from "src/components/typography/Markdown";
import { Warning } from "src/components/typography/Warning";
import { useReadmeQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import { linkBlueColor } from "src/styles/theme";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 3rem 0;
  font-size: var(--fz-sm);

  &.reset * {
    margin: revert;
    padding: revert;
  }

  &.reset a {
    &:link,
    &:visited {
      text-decoration: none;
      color: ${linkBlueColor};
    }

    &:hover {
      text-decoration: underline;
    }
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
      <Wrapper className="reset">
        <Markdown text={content} />
      </Wrapper>
    );
  }

  if (loading) {
    return <Wrapper>Loading...</Wrapper>;
  }

  if (error) {
    return (
      <Wrapper>
        <Warning>⚠️ Could not download your profile README</Warning>
        <Warning>
          <LinkUnderline href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme">
            Here's the documentation
          </LinkUnderline>
        </Warning>
      </Wrapper>
    );
  }

  return null;
};
