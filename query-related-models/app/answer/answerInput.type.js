const { GraphQLInputObjectType } = require('graphql');
const _ = require('lodash');

const answerFields = require('./answer.fields');

const AnswerInputType = new GraphQLInputObjectType({
  name: 'AnswerInputType',
  description: 'Answer payload definition',
  fields: () => ({
    ...answerFields
  })
});

module.exports = AnswerInputType;