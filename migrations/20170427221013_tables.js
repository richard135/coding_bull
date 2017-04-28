
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('input', (table) => {
      table.increments();
      table.string('name');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE input CASCADE');
  ])
};
