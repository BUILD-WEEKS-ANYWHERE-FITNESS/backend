
exports.up = function(knex) {
  return knex.schema
    .createTable('clients', tbl => {
        tbl
            .increments()
        tbl
            .string('username').notNullable().unique()
        tbl
            .string('password').notNullable()
        tbl
            .boolean('isInstructor').defaultTo(false)
    })
    .createTable('instructors', tbl => {
        tbl.increments()
        tbl
            .string('username').notNullable().unique()
        tbl
            .string('password').notNullable()
        tbl
            .boolean('isInstructor').defaultTo(true)
    })
    .createTable('classes', tbl => {
        tbl.increments()
        tbl
            .string('name').notNullable()
        tbl
            .date('start_time').notNullable()
        tbl
            .string('duration').notNullable()
        tbl
            .string('intensity').notNullable()
        tbl
            .string('location').notNullable()
        tbl
            .string('max_size').notNullable()
        tbl
            .string('type').notNullable()
    })
    .createTable('enrolled', tbl => {
        tbl.increments()
        tbl
            .integer('client_id')
            .unsigned()
            .references('id')
            .inTable('clients')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
        tbl
            .integer('class_id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.unique(['user_id', 'class_id'])
    })
    .createTable('punchpass', tbl => {
        tbl.increments()
        tbl
            .integer('client_id')
            .unsigned()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('instructor_id')
            .unsigned()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.unique(['client_id', 'instructor_id'])
    })
};

exports.down = function(knex) {
  return schema.knex
    .dropTableIfExists('punchpass')
    .dropTableIfExists('enrolled')
    .dropTableIfExists('classes')
    .dropTableIfExists('instructors')
    .dropTableIfExists('clients')
};
