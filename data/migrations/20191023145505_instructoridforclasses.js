exports.up = function(knex) {
  return knex.schema.table('classes', tbl => {
    tbl
        .integer('instructor_id')
        .unsigned()
        .references('id')
        .inTable('instructors')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  });
};

exports.down = function(knex) {
  return knex.schema.table('classes', tbl => {
      tbl.dropColumn('instructor_id')
  })
};
