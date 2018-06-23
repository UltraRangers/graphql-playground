const _ = require('lodash');
const UserData = require('./user.data.json');

// Dont mind this I guess we will not hand rolled the data access hehe
const UserDao = {
  findById(id) {
    return UserData.find((user) => user.id === id); 
  },
  find(filter = {}) {
    filter.limit = _.isNil(filter.limit) ? UserData.length : filter.limit;
    filter.skip = filter.skip || 0;
    let list = UserData.slice(filter.skip * filter.limit, filter.limit * (filter.skip + 1));     
    if (filter.order) {
      list = filter.order.split(' ')[1] === 'DESC'  ? _.sortBy(list, filter.order.split(' ')[0]).reverse() : _.sortBy(list, filter.order.split(' ')[0]);
    }
    if (filter.where) {
      list = _.filter(list, filter.where);
    }
    return list;
  }
};

module.exports = UserDao;
