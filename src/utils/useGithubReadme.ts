import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { Base64 } from "js-base64";

export const useGithubReadme = (username: string) => {
  const [readme, setReadme] = useState({ content: "", loading: true });

  useEffect(() => {
    const fetchReadme = async () => {
      const octokit = new Octokit();
      const readme = await octokit.rest.repos.getReadme({
        owner: username,
        repo: username,
      });
      setReadme({
        content: Base64.decode(readme.data.content),
        loading: false,
      });
    };
    fetchReadme();
  }, [username]);

  return readme;
};
