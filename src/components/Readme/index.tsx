import React from "react";
import { useGithubReadme } from "src/utils/useGithubReadme";
import { ReadmeSkeleton } from "src/components/Readme/ReadmeSkeleton";
import { Markdown } from "src/components/Readme/Markdown";
import { useStore } from "src/store";

export const Readme: React.FC = () => {
  const username = useStore((state) => state.username);
  const { content, loading } = useGithubReadme(username);

  return (
    <div className="readme-container">
      {loading ? <ReadmeSkeleton /> : <Markdown text={content} />}
    </div>
  );
};
