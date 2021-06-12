import { useEffect } from "react";
import { defaults } from "src/constants/defaults";

export const useDocumentTitle = (title?: string | null) => {
  useEffect(() => {
    document.title = title || defaults.documentTitle;
  }, [title]);
};
