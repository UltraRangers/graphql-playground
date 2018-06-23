const { GraphQLObjectType, GraphQLString } = require('graphql');

const messageFields = require('./message.fields');

// I think having a "base fields" will make it SOLID, easy to extend/add fields
// Is MessageType and MessageInputType fields will really differ from each other?
// Where do we use again these fields?

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  description: 'Message type definition',
  fields: () => ({ 
    ...messageFields
  })
});

module.exports = MessageType;