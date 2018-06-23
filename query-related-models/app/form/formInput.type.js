const { GraphQLInputObjectType } = require('graphql');

const formFields = require('./form.fields');

const FormInputType = new GraphQLInputObjectType({
  name: 'FormInputType',
  description: 'Form payload definition',
  fields: () => ({
    ...formFields
  })
});

module.exports = FormInputType;