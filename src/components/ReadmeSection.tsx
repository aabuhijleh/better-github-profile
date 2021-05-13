import React from "react";
import { useGithubReadme } from "src/utils/useGithubReadme";
import { SkeletonPage } from "src/components/SkeletonPage";
import { MyReadme } from "src/components/MyReadme";
import { GITHUB_USERNAME } from "src/constants";

export const ReadmeSection: React.FC = () => {
  const { content, loading } = useGithubReadme(GITHUB_USERNAME);

  return loading ? <SkeletonPage /> : <MyReadme markdown={content} />;
};
