const { mkdirSync, writeFileSync } = require('fs');
const { sync } = require('rimraf');

const files = [
  {
    name: 'query.js',
    data: 'const queries = {  }; \n\n' + 'module.exports = queries;'
  }, {
    name: 'mutation.js',
    data: 'const mutations = {  }; \n\n' + 'module.exports = mutations;'
  }];

const generateFiles = (rootFolder) => {
  // rmdirSync(rootFolder);
  sync(rootFolder);
  mkdirSync(rootFolder);
  for (const file of files) {
    writeFileSync(rootFolder + file.name, file.data);
  }
};

generateFiles('./app/form/');