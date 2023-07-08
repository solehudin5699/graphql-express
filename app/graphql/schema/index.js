const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = graphql;

const dummyPost = [
  {
    id: '1',
    title: 'Title ABC',
    body: 'body post',
    slug: 'title-abc',
  },
];

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return dummyPost.filter((el) => el.id === args.id)[0];
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return dummyPost;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        slug: { type: GraphQLString },
      },
      resolve(parent, args) {
        return dummyPost[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
