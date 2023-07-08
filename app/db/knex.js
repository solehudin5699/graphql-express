const environment = 'development';
const config = require('../../knexfile')[environment];
const knex = require('knex').knex(config);
module.exports = knex;
