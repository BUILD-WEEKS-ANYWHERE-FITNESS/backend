
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('punchpass').insert([
    {client_id: 1, instructor_id: 1, passes: 1},
    {client_id: 2, instructor_id: 1, passes: 1},
    {client_id: 3, instructor_id: 1, passes: 1},
    {client_id: 4, instructor_id: 2, passes: 1},
    {client_id: 5, instructor_id: 2, passes: 1},
    {client_id: 6, instructor_id: 2, passes: 1},
    {client_id: 7, instructor_id: 3, passes: 1},
    {client_id: 8, instructor_id: 3, passes: 1},
    {client_id: 9, instructor_id: 3, passes: 1},
    {client_id: 10, instructor_id: 4, passes: 1},
    {client_id: 11, instructor_id: 4, passes: 1},
    {client_id: 12, instructor_id: 4, passes: 1},
  ]);
};
