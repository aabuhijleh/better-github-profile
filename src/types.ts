import { RestEndpointMethodTypes } from "@octokit/rest";

export interface GithubUserData {
  user:
    | RestEndpointMethodTypes["users"]["getByUsername"]["response"]["data"]
    | null;
  loading: boolean;
  error: string;
}
