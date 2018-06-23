const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID
} = require('graphql');

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString }
  })
});

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: AddressType }
	})
});

module.exports = UserType;
