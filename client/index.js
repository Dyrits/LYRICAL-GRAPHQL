import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import SongsPage from "./pages/SongsPage";

const client = new ApolloClient({});

const Root = () => {
  return  (
    <ApolloProvider client={client}>
      <SongsPage />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
