const faker = require('@faker-js/faker').faker;

const generatedData = Array(25)
  .fill(null)
  .map(() => ({
    title: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
    slug: faker.lorem.slug(),
  }));
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert(generatedData);
};
