import React from "react";
import { Link, LinkUnderline } from "src/components/ui/Link";
import { Markdown } from "src/components/misc/Markdown";
import { Warning } from "src/components/typography/Warning";
import { useReadmeQuery } from "src/generated/graphql";
import { usePersistentStore, useStore } from "src/store";
import styled from "styled-components/macro";
import { borderColor, textSecondayColor } from "src/styles/theme";
import ContentLoader from "react-content-loader";
import { Fade } from "react-awesome-reveal";

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
  const mode = usePersistentStore((state) => state.mode);
  const { data, loading, error } = useReadmeQuery({
    variables: { username },
  });

  if (data?.repository?.object?.__typename === "Blob") {
    const content = data?.repository.object.text as string;

    return (
      <Fade>
        <Wrapper>
          <ReadmeRepo>
            <Link href={`https://github.com/${username}/${username}`}>
              {username}
            </Link>
            <span>/</span>README<span>.md</span>
          </ReadmeRepo>
          <Markdown text={content} />
        </Wrapper>
      </Fade>
    );
  }

  if (loading) {
    return (
      <Wrapper>
        <ContentLoader
          viewBox="0 0 100% 650"
          height={"100%"}
          width={"100%"}
          backgroundColor={mode === "light" ? "#f5f5f5" : "#21262d"}
          foregroundColor={mode === "light" ? "#dbdbdb" : "#181c25"}
        >
          <rect x="0" y="0" rx="5" ry="5" width="40%" height="20" />
          <rect x="0" y="42" rx="5" ry="5" width="100%" height="200" />
          <rect x="0" y="265" rx="5" ry="5" width="100%" height="10" />
          <rect x="0" y="285" rx="5" ry="5" width="100%" height="10" />
          <rect x="0" y="305" rx="5" ry="5" width="100%" height="10" />
          <rect x="0" y="335" rx="5" ry="5" width="65%" height="10" />
          <rect x="75%" y="335" rx="5" ry="5" width="10%" height="10" />
          <rect x="0" y="355" rx="5" ry="5" width="65%" height="10" />
          <rect x="75%" y="355" rx="5" ry="5" width="30%" height="10" />
          <rect x="0" y="375" rx="5" ry="5" width="65%" height="10" />
          <rect x="75%" y="375" rx="5" ry="5" width="30%" height="10" />
          <rect x="0" y="395" rx="5" ry="5" width="65%" height="8" />
          <rect x="75%" y="395" rx="5" ry="5" width="30%" height="8" />
          <rect x="0" y="415" rx="5" ry="5" width="65%" height="8" />
          <rect x="75%" y="415" rx="5" ry="5" width="30%" height="8" />
          <rect x="0" y="445" rx="5" ry="5" width="65%" height="8" />
          <rect x="75%" y="445" rx="5" ry="5" width="30%" height="8" />
          <rect x="0" y="465" rx="5" ry="5" width="65%" height="8" />
          <rect x="75%" y="465" rx="5" ry="5" width="30%" height="8" />
          <rect x="0" y="485" rx="5" ry="5" width="65%" height="8" />
          <rect x="75%" y="485" rx="5" ry="5" width="30%" height="8" />
          <rect x="0" y="505" rx="5" ry="5" width="65%" height="8" />
          <rect x="75%" y="505" rx="5" ry="5" width="30%" height="8" />
          <rect x="0" y="525" rx="5" ry="5" width="65%" height="8" />
          <rect x="75%" y="525" rx="5" ry="5" width="30%" height="8" />
          <rect x="75%" y="550" rx="5" ry="5" width="10%" height="10" />
          <circle cx="76.5%" cy="590" r="18" />
          <circle cx="80%" cy="590" r="18" />
          <circle cx="83.5%" cy="590" r="18" />
          <circle cx="87%" cy="590" r="18" />
          <circle cx="90.5%" cy="590" r="18" />
          <circle cx="94%" cy="590" r="18" />
        </ContentLoader>
      </Wrapper>
    );
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
