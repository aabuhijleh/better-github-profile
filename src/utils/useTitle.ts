import { useEffect } from "react";
import { defaults } from "src/defaults";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title || defaults.title;
  }, [title]);
};
