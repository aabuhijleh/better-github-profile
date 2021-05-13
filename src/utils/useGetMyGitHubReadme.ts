import { useState, useEffect } from "react";

export const useGetMyGitHubReadme = () => {
  const [resumeMd, setResumeMd] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/aabuhijleh/aabuhijleh/main/README.md"
      );
      setResumeMd(await response.text());
    };
    fetchResume();
  }, []);

  return resumeMd;
};
