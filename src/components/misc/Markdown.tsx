import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { linkBlueColor } from "src/styles/theme";
import styled from "styled-components/macro";

interface MarkdownProps {
  text?: string;
}

const Wrapper = styled.div`
  font-size: var(--fz-sm);

  & * {
    margin: revert;
    padding: revert;
  }

  & a {
    &:link,
    &:visited {
      text-decoration: none;
      color: ${linkBlueColor};
    }

    &:hover {
      text-decoration: underline;
    }
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
    font-weight: 600;
    line-height: 1.25;
  }

  & blockquote,
  & details,
  & dl,
  & ol,
  & p,
  & pre,
  & table,
  & ul {
    margin-top: 0;
    margin-bottom: 1.6rem;
  }
`;

export const Markdown: React.FC<MarkdownProps> = ({ text }) => {
  if (!text) return null;
  return (
    <Wrapper>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />
    </Wrapper>
  );
};
