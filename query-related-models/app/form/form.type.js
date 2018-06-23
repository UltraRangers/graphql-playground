const { GraphQLObjectType } = require('graphql');

const formFields = require('./form.fields');

const FormType = new GraphQLObjectType({
  name: 'FormType',
  description: 'Form type definition',
  fields: () => ({
    ...formFields
  })
});

module.exports = FormType;