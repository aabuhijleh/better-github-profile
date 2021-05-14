import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { GithubUserData } from "src/types";

export const useGithubUser = (username: string) => {
  const [userData, setUserData] = useState<GithubUserData>({
    user: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      let user = null;
      let error = "⚠️ Could not get your GitHub profile data";
      try {
        const octokit = new Octokit();
        const userResponse = await octokit.rest.users.getByUsername({
          username,
        });
        if (userResponse.status <= 400) {
          user = userResponse.data;
          error = "";
        } else {
          console.error("getByUsername response error", user);
        }
      } catch (err) {
        console.error("could not fetch user data", err);
      }
      setUserData({
        user,
        loading: false,
        error,
      });
    };
    fetchUser();
  }, [username]);

  return userData;
};
