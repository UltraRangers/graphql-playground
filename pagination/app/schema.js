const {
  GraphQLSchema,
	GraphQLObjectType
} = require('graphql');

const UserQuery = require('./user/user.query');

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
    ...UserQuery
  })
});

module.exports = new GraphQLSchema({
	query: Query
});
