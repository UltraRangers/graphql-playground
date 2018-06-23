const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const messageFields = require('./message.fields');

const MessageInputType = new GraphQLInputObjectType({
  name: 'MessageInputType',
  description: 'Message payload definition',
  fields: () => ({ 
    ...messageFields 
  })
});

module.exports = MessageInputType;