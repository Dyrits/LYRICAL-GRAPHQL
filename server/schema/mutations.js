const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require("mongoose");
const Song = mongoose.model("song");
const Lyric = mongoose.model("lyric");
const SongType = require("./SongType");
const LyricType = require("./LyricType");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return new Song({ title }).save();
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        song: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        return Song.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.like(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.findByIdAndRemove(id);
      }
    }
  }
});

module.exports = mutation;
