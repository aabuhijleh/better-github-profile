import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createClient = () =>
  new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
    },
    cache: new InMemoryCache(),
  });
