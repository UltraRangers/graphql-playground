const { GraphQLList } = require('graphql');
const _ = require('lodash');

const AnswerType = require('./answer.type');
const AnswerInputType = require('./answerInput.type');

const getAnswers = {
  type: new GraphQLList(AnswerType),
  args: {
    input: { type: AnswerInputType }
  },
  resolve: (root, { input }) => {
    const data = require('../data/answer');
    return _.filter(data, input);
  }
}

module.exports = getAnswers;