const { GraphQLObjectType, GraphQLList } = require('graphql');
const _ = require('lodash');

const questionFields = require('./question.fields');
const formFields = require('../form/form.fields');

const FormType = require('../form/form.type');

const QuestionType = new GraphQLObjectType({
  name: 'QuestionType',
  description: 'Question type definition',
  fields: () => ({
    ...questionFields,
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

module.exports = QuestionType;