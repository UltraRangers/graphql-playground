const { GraphQLInt, GraphQLString } = require('graphql');

const fields = {
  formId: { type: GraphQLInt },
  questionId: { type: GraphQLInt },
  answer: { type: GraphQLString }
};

module.exports = fields;