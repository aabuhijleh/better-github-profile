import React from "react";
import FadeIn from "react-fade-in";
import MarkdownToJsx from "markdown-to-jsx";

interface MarkdownProps {
  text: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ text }) => {
  return (
    <>
      <FadeIn delay={100}>
        <MarkdownToJsx>{text}</MarkdownToJsx>
      </FadeIn>
    </>
  );
};
