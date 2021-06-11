import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GITHUB_GRAPHQL_ENDPOINT } from "src/constants";

export const createClient = () =>
  new ApolloClient({
    uri: GITHUB_GRAPHQL_ENDPOINT,
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
    },
    cache: new InMemoryCache(),
  });
