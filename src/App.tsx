import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useGetMyGitHubReadme } from "utils/useGetMyGitHubReadme";
import FadeIn from "react-fade-in";

export const App: React.FC = () => {
  const resumeMd = useGetMyGitHubReadme();

  return (
    <FadeIn delay={100}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={resumeMd} />{" "}
    </FadeIn>
  );
};
