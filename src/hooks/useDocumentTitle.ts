import { useEffect } from "react";
import { defaults } from "src/defaults";

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title || defaults.documentTitle;
  }, [title]);
};
