const { GraphQLList } = require('graphql');
const { readFileSync } = require('fs');

const MessageType = require('./message.type');

const getMessages = {
  type: new GraphQLList(MessageType),
  resolve: () => {
    try {
      let data = JSON.parse(JSON.stringify(readFileSync('./data-store.txt', { encoding: 'utf8' })));
      data = prettyTransformUTFToArray(data);
      data = prettyFormatMessages(data);
      return data;  
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
};

function prettyTransformUTFToArray(data = '') {
  data = data.split(' ');
  data = data.filter(i => i.length); // remove empty strings
  return data;
}

function prettyFormatMessages(data = []) {
  // lol at this
  let messages = JSON.parse(JSON.stringify(data));
  messages = messages.map((message) => { 
    const messageText = message.split('-')[0];
    const messageCreator = message.split('-')[1]
    const messageTimestamp = message.split('-')[2];
    return { message: messageText, creator: messageCreator, timestamp: messageTimestamp }
  });
  return messages;
}

module.exports = getMessages;