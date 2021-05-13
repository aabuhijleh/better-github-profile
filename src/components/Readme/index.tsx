import React from "react";
import { useGithubReadme } from "src/utils/useGithubReadme";
import { ReadmeSkeleton } from "src/components/Readme/ReadmeSkeleton";
import { Markdown } from "src/components/Readme/Markdown";
import { GITHUB_USERNAME } from "src/constants";

export const Readme: React.FC = () => {
  const { content, loading } = useGithubReadme(GITHUB_USERNAME);

  return (
    <div className="readme-container">
      {loading ? <ReadmeSkeleton /> : <Markdown text={content} />}
    </div>
  );
};
