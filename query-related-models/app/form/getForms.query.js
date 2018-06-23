const { GraphQLList } = require('graphql');
const _ = require('lodash');

const FormType = require('./form.type');
const FormInpuType = require('./formInput.type');

const getForms = {
  type: new GraphQLList(FormType),
  args: {
    input: { type: FormInpuType }
  },
  resolve: (root, { input }) => {
    const data = require('../data/form');
    return _.filter(data, input);
  }
};

/**
 * Plan and actions

Plan: Checkout the basic form-question-answer schema based from Directderm

Actions:

- Initialize data to view high-level
- Setup form, question and answer schemas
- Setup data relationships
- Glue the created schemas to the root schemas
- Check out
 */

module.exports = getForms;