import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function SongsPage({ data }) {
  if (data.loading) {
    return <div>Loading...</div>;
  }

  return <div>SongList</div>;
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongsPage);
