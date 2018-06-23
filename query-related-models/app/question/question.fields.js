const { GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const fields = {
  formId: { type: GraphQLInt },
  questionId: { type: GraphQLInt },
  title: { type: GraphQLString },
  type: { type: GraphQLString }
};

module.exports = fields;