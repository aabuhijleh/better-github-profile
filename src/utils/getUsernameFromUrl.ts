import queryString from "query-string";
import { defaults } from "src/defaults";

export const getUsernameFromUrl = () => {
  let username = queryString.parse(document.location.search)["username"];

  if (typeof username !== "string" || username.length === 0) {
    username = defaults.username;
  }

  return username;
};
