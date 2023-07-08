const models = require('../../models');

const resolver = {
  post: async (id) => {
    try {
      const result = await models.getPost({ id });
      return result;
    } catch (error) {
      return error;
    }
  },
  posts: async () => {
    try {
      const result = await models.getPosts();
      return result;
    } catch (error) {
      return error;
    }
  },
  createPost: async (body) => {
    try {
      const result = await models.createPost(body);
      return result;
    } catch (error) {
      return error;
    }
  },
};

module.exports = resolver;
