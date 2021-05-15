import { githubEmojis } from "src/assets/githubEmojis";

export const convertShortnameToUnicode = (text: string) => {
  if (!text) return "";
  const result = text.replace(/:.+?:/g, replacer);
  return result;
};

const replacer = (match: string) => {
  const cleanMatch = match.replace(/:/g, "");
  let imgPath = githubEmojis[cleanMatch];
  let emoji = "";
  if (imgPath) {
    const url = new URL(imgPath);
    const code = url.pathname.substring(
      url.pathname.lastIndexOf("/") + 1,
      url.pathname.lastIndexOf(".")
    );
    emoji = `&#x${code};`;
  }
  return emoji || match;
};
