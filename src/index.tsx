import React from "react";
import ReactDOM from "react-dom";
import { App } from "src/components/App";
import { ApolloProvider } from "@apollo/client";
import { createClient } from "src/utils/createClient";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={createClient()}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
