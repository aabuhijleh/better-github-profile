import { useState, useEffect } from "react";

export const useGithubReadme = (username: string) => {
  const [readme, setReadme] = useState({ content: "", loading: true });

  useEffect(() => {
    const fetchReadme = async () => {
      const response = await fetch(
        `https://raw.githubusercontent.com/${username}/${username}/main/README.md`
      );
      const readme = await response.text();
      // await new Promise((resolve) => setTimeout(resolve, 50000));
      setReadme({ content: readme, loading: false });
    };
    fetchReadme();
  }, [username]);

  return readme;
};
