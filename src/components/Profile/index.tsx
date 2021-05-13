import React from "react";
import { useGithubUser } from "src/utils/useGithubUser";
import { GITHUB_USERNAME } from "src/constants";
import { ProfileSkeleton } from "src/components/Profile/ProfileSkeleton";

export const Profile: React.FC = () => {
  const { userResponse, loading } = useGithubUser(GITHUB_USERNAME);

  if (!loading && userResponse?.status !== 200) {
    return <div>Error: unable to get my user data from GitHub</div>;
  }

  if (loading) {
    return <ProfileSkeleton />;
  }

  const { data } = userResponse!;

  return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
};
