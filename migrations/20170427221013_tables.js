
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('input', (table) => {
      table.increments();
      table.string('title');
      table.string('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE input CASCADE')
  ])
};
