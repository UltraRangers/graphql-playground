const { GraphQLInputObjectType } = require('graphql');

const questionFields = require('./question.fields');

const QuestionInput = new GraphQLInputObjectType({
  name: 'QuestionInput', // variable name must be the same as name
  description: 'Question payload defintion',
  fields: () => ({
    ...questionFields
  })
});

module.exports = QuestionInput;