import React from "react";
import { Link, LinkUnderline } from "src/components/ui/Link";
import { Markdown } from "src/components/misc/Markdown";
import { Warning } from "src/components/typography/Warning";
import { useReadmeQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styled from "styled-components/macro";
import { borderColor, textSecondayColor } from "src/styles/theme";

const Wrapper = styled.div`
  padding: 2.4rem;
  border: 1px solid ${borderColor};
  border-radius: var(--border-radius);
  min-height: 75vh;
`;

const ReadmeRepo = styled.div`
  margin-bottom: 1.6rem;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  font-weight: 600;

  span {
    display: inline-block;
    color: ${textSecondayColor};
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
        <ReadmeRepo>
          <Link href={`https://github.com/${username}/${username}`}>
            {username}
          </Link>
          <span>/</span>README<span>.md</span>
        </ReadmeRepo>
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
