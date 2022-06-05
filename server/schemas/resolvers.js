const { AuthenticationError } = require('apollo-server-express');
const { User, Goal, Todo, Step } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    get: async () => {
      return await User.find({})
    },
    getUser: async (parent, args, context) => {
      if (context.user) {
      return await User.findOne({ _id: context.user._id })
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    // QUERY FOR DEVELOPMENT
    getUserDevelopment: async (parent, { email }, context) => {
      console.log('route hit')
      return await User.findOne({ email })
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
