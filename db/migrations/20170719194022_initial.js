exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('username');
      table.string('email').unique();
      table.string('password');
      table.timestamp('last_activity');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.json('body');
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('users'),
  ]);
};
