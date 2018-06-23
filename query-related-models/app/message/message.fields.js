const { GraphQLString, Graph } = require('graphql');

const fields = {
  message: { type: GraphQLString },
  creator: { type: GraphQLString },
  timestamp: { type: GraphQLString }
};

module.exports = fields;