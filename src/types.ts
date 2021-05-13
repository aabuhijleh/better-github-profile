import { RestEndpointMethodTypes } from "@octokit/rest";

export interface GithubUserData {
  userResponse:
    | RestEndpointMethodTypes["users"]["getByUsername"]["response"]
    | null;
  loading: boolean;
}
