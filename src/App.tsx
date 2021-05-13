import React from "react";
import { useGetMyGitHubReadme } from "utils/useGetMyGitHubReadme";
import { SkeletonPage } from "components/SkeletonPage";
import { MyReadme } from "components/MyReadme";

export const App: React.FC = () => {
  const { readme, loading } = useGetMyGitHubReadme();

  return loading ? <SkeletonPage /> : <MyReadme markdown={readme} />;
};
