const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInputObjectType } = require('graphql');

const MessagesQueries = require('./message/query');
const MessagesMutations = require('./message/mutation');

const FormQueries = require('./form/query');
const QuestionQueries = require('./question/query');

const AnswerQueries = require('./answer/query');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...MessagesQueries,
            ...FormQueries,
            ...QuestionQueries,
            ...AnswerQueries
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            ...MessagesMutations
        })
    })
});



module.exports = schema;