import githubEmojis from "src/assets/githubEmojis.json";

export const convertShortnameToUnicode = (text: string) => {
  if (!text) return "";
  const result = text.replace(/:.+?:/g, replacer);
  return result;
};

const replacer = (match: string) => {
  const cleanMatch = match.replace(/:/g, "");

  let result = match;
  let imgPath = (githubEmojis as any)[cleanMatch];

  if (!imgPath) return result;

  const { pathname } = new URL(imgPath);
  const code = pathname.substring(
    pathname.lastIndexOf("/") + 1,
    pathname.lastIndexOf(".")
  );
  result = `&#x${code};`;

  return result;
};
