const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInputObjectType
} = require('graphql');

const AddressFields = {
	city: { type: GraphQLString },
	zipcode: { type: GraphQLString }
};

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    ... AddressFields
  })
});

const AddressInputType = new GraphQLInputObjectType({
	name: 'AddressInputType',
	description: 'Address payload definition',
	fields: () => ({
		... AddressFields
	})
})

const UserFields = {
	id: { type: GraphQLID },
	name: { type: GraphQLString },
	email: { type: GraphQLString },
	address: { type: AddressType }
};

const UserInputFields = {
	id: { type: GraphQLID },
	name: { type: GraphQLString },
	email: { type: GraphQLString },
	address: { type: AddressInputType }
};

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		... UserFields
	})
});

const UserInputType = new GraphQLInputObjectType({
	name: 'UserInputType',
	description: 'User payload definition',
	fields: () => ({
		... UserInputFields
	})
})

module.exports = { 
	AddressType,
	UserType,
	UserInputType,
	AddressInputType
}
