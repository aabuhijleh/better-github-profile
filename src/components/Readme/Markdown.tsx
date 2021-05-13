import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import FadeIn from "react-fade-in";

interface MarkdownProps {
  text: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ text }) => {
  return (
    <>
      <FadeIn delay={100}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />
      </FadeIn>
    </>
  );
};
