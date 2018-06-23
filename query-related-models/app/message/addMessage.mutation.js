const { GraphQLNonNull } = require('graphql');
const { appendFileSync } = require('fs');

const MessageType = require('./message.type');
const MessageInputType = require('./messageInput.type');

const addMessage = {
  type: MessageType,
  args: {
    input: { type: new GraphQLNonNull(MessageInputType) }
  },
  resolve: (rootValue, { input }) => {
    appendFileSync('./data-store.txt', `${input.message}-${input.creator}-${Date.now()}  `);
    return input;
  }
};

module.exports = addMessage;