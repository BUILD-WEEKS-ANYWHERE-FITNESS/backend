const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructors').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        {username: 'Issac', password: bcrypt.hashSync("12345", 10)},
        {username: 'Madelaine', password: bcrypt.hashSync("12345", 10)},
        {username: 'Walter', password: bcrypt.hashSync("12345", 10)},
        {username: 'Tiffani', password: bcrypt.hashSync("12345", 10)},
        {username: 'Peter', password: bcrypt.hashSync("12345", 10)},
        {username: 'Melody', password: bcrypt.hashSync("12345", 10)},
        {username: 'Alex', password: bcrypt.hashSync("12345", 10)}
      ]);
    });
};
