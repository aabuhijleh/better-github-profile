import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { GithubUserData } from "src/types";

export const useGithubUser = (username: string) => {
  const [userData, setUserData] = useState<GithubUserData>({
    userResponse: null,
    loading: true,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const octokit = new Octokit();
      const user = await octokit.rest.users.getByUsername({ username });
      setUserData({ userResponse: user, loading: false });
    };
    fetchUser();
  }, [username]);

  return userData;
};
