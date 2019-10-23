
exports.seed = function(knex) {
 
      // Inserts seed entries
      return knex('enrolled').insert([
        {client_id: 1, class_id: 1},
        {client_id: 2, class_id: 1},
        {client_id: 3, class_id: 1},
        {client_id: 4, class_id: 2},
        {client_id: 5, class_id: 2},
        {client_id: 6, class_id: 2},
        {client_id: 7, class_id: 3},
        {client_id: 8, class_id: 3},
        {client_id: 9, class_id: 3},
        {client_id: 10, class_id: 4},
        {client_id: 11, class_id: 4},
        {client_id: 12, class_id: 4},
        {client_id: 13, class_id: 5},
        {client_id: 1, class_id: 5},
        {client_id: 2, class_id: 5},
        {client_id: 3, class_id: 6},
        {client_id: 4, class_id: 6},
        {client_id: 5, class_id: 6}
      ]);
};
