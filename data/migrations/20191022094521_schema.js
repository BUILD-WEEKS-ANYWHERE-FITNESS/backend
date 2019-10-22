
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
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('class_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.unique(['user_id', 'class_id'])
    })
    .createTable('punchpass', tbl => {
        tbl.increments()
        tbl.integer('passes').notNullable()
        tbl
            .integer('instructor_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('instructors')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('client_id')
            .unsigned()
            .references('id')
            .inTable('clients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.unique(['client_id', 'instructor_id'], 'unique_pass_per_instructor')
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
