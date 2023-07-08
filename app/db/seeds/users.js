const faker = require('@faker-js/faker').faker;

const generatedData = Array(25)
  .fill(null)
  .map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.phone.number(),
  }));

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert(generatedData);
};
