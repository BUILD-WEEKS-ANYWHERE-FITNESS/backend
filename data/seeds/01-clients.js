const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {username: 'Jane', password: bcrypt.hashSync("12345", 10)},
        {username: 'Sherlock', password: bcrypt.hashSync("12345", 10)},
        {username: 'James', password: bcrypt.hashSync("12345", 10)},
        {username: 'Vivaldi', password: bcrypt.hashSync("12345", 10)},
        {username: 'Luis', password: bcrypt.hashSync("12345", 10)},
        {username: 'Esther', password: bcrypt.hashSync("12345", 10)},
        {username: 'Serena', password: bcrypt.hashSync("12345", 10)}
      ]);
    });
};
