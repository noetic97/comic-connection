exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.string('email');
      table.string('password');
      table.timestamp('last_activity');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('favorite_id').unsigned()
      table.foreign('favorite_id').references('users.id');
      table.json('body');
      table.timestamps(true, true);
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('users')
  ]);
};
