import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { Base64 } from "js-base64";

export const useGithubReadme = (username: string) => {
  const [readme, setReadme] = useState({ content: "", loading: true });

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const octokit = new Octokit();
        const readme = await octokit.rest.repos.getReadme({
          owner: username,
          repo: username,
        });
        setReadme({
          content: Base64.decode(readme.data.content),
          loading: false,
        });
      } catch (error) {
        console.error("could not fetch readme", error);
        setReadme({
          content: `### Could not download your profile README :( \n\n ### [Here's the documentation](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)`,
          loading: false,
        });
      }
    };
    fetchReadme();
  }, [username]);

  return readme;
};
