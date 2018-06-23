const {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
	GraphQLID
} = require('graphql');

const UserDao = require('./user.dao');
const { UserType, UserInputType } = require('./user.type');

const FilterType = new GraphQLInputObjectType({
  name: 'Filter',
  fields: () => ({
    limit: { type: GraphQLInt },
    skip: { type: GraphQLInt },
    order: { type: GraphQLString },
    where: { type: UserInputType }
  })
});

const UserQuery = {
  user: {
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return UserDao.findById(args.id);
      return UserData.find((user) => user.id === args.id);
    }
  },
  users: {
    type: new GraphQLList(UserType),
    args: { filter: { type: FilterType } },
    resolve(parent, args) {
      // server side pagination?
      // filter.limit = 10
      return UserDao.find(args.filter);
    }
  },
};

module.exports = UserQuery;
