import { RestEndpointMethodTypes } from "@octokit/rest";

export type ColorTheme = "dark" | "light";

export interface DefaultValues {
  username: string;
  theme: ColorTheme;
  showFab: boolean;
  showFooter: boolean;
  title: string;
}

export interface GithubUserData {
  user:
    | RestEndpointMethodTypes["users"]["getByUsername"]["response"]["data"]
    | null;
  loading: boolean;
  error: string;
}
