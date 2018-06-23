const { GraphQLList } = require('graphql');
const _ = require('lodash');

const QuestionType = require('./question.type');
const QuestionInputType = require('./questionInput.type');


const getQuestions = {
  type: new GraphQLList(QuestionType),
  args: {
    input: { type: QuestionInputType }
  },
  resolve: (root, { input }) => {
    const data = require('../data/question');
    return _.filter(data, input);
  }
};

module.exports = getQuestions;