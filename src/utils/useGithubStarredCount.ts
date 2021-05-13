import { useState, useEffect } from "react";
import parse from "parse-link-header";

// there is no straightforward way to
// get the total number of starred repos
// this method is the best we can do right now
// see https://stackoverflow.com/a/30638428/9698583
export const useGithubStarredCount = (username: string) => {
  const [starredCount, setStarredCount] = useState(0);

  useEffect(() => {
    const fetchStarredCount = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/starred?per_page=1`
      );

      let starredCount = 0;
      const linkHeader = response.headers.get("link");
      if (linkHeader) {
        const parsed = parse(linkHeader);
        const lastPage = Number(parsed?.last?.page);
        starredCount = Number.isNaN(lastPage) ? 0 : lastPage;
      }

      setStarredCount(starredCount);
    };
    fetchStarredCount();
  }, [username]);

  return starredCount;
};
