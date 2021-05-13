import React from "react";
import { useGithubReadme } from "utils/useGithubReadme";
import { SkeletonPage } from "components/SkeletonPage";
import { MyReadme } from "components/MyReadme";
import "styles/app.scss";

export const App: React.FC = () => {
  const { content, loading } = useGithubReadme("aabuhijleh");

  return loading ? <SkeletonPage /> : <MyReadme markdown={content} />;
};
