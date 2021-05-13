import { useState, useEffect } from "react";

export const useGetMyGitHubReadme = () => {
  const [resumeMd, setResumeMd] = useState({ readme: "", loading: true });

  useEffect(() => {
    const fetchResume = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/aabuhijleh/aabuhijleh/main/README.md"
      );
      const readme = await response.text();
      setResumeMd({ readme, loading: false });
    };
    fetchResume();
  }, []);

  return resumeMd;
};
