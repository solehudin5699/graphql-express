const graphql = require('graphql');
const resolver = require('../resolver');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLID } = graphql;

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
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    slug: { type: GraphQLString },
    created_at: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return resolver.post(args.id);
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return resolver.posts();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    createPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        slug: { type: GraphQLString },
      },
      resolve(parent, args) {
        return resolver.createPost(args);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
