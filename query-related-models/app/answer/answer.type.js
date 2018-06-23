const { GraphQLObjectType } = require('graphql');
const _ = require('lodash');

const answerFields = require('./answer.fields');
const formFields = require('../form/form.fields');

const FormType = require('../form/form.type');

const AnswerType = new GraphQLObjectType({
  name: 'AnswerType',
  description: 'Answer type definition',
  fields: () => ({
    ...answerFields,
    form: {
      fields: () => ({ 
        ...formFields 
      }),
      type: FormType,
      resolve: (root, args) => {
        const data = require('../data/form.json');
        return _.find(data, { formId: root.formId });
      }
    }
  })
});

module.exports = AnswerType;