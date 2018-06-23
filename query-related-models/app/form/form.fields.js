const { GraphQLInt, GraphQLString } = require('graphql');

const fields = {
  formId: { type: GraphQLInt },
  module: { type: GraphQLString },
  title: { type: GraphQLString }
};

module.exports = fields;