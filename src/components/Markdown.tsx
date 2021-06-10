import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  text: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ text }) => {
  if (!text) return null;
  return <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />;
};
