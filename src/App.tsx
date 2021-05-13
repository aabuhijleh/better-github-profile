import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import raw from "raw.macro";

const markdown = raw("./resume.md");

export const App: React.FC = () => {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />;
};
