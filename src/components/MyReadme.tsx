import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import FadeIn from "react-fade-in";

interface MyReadmeProps {
  markdown: string;
}

export const MyReadme: React.FC<MyReadmeProps> = ({ markdown }) => {
  return (
    <>
      <FadeIn delay={100}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />
      </FadeIn>
    </>
  );
};
