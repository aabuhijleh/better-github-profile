import React from "react";
import { useGithubReadme } from "@/utils/useGithubReadme";
import { SkeletonPage } from "@/components/SkeletonPage";
import { MyReadme } from "@/components/MyReadme";
import { GITHUB_USERNAME } from "@/constants";

export const ReadmeSection: React.FC = () => {
  const { content, loading } = useGithubReadme(GITHUB_USERNAME);

  return loading ? <SkeletonPage /> : <MyReadme markdown={content} />;
};
