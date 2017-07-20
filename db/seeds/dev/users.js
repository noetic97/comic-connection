
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => knex('favorites').del())
    .then(() => {
      return Promise.all([

        knex('users').insert({
          name: 'Joe',
          username: 'noetic',
          email: 'joe@joe.com',
          password: '123456',
        }, 'id')
        .then(userId => {
          return knex('favorites').insert({
            title: 'Saga',
            user_id: userId[0],
            body: JSON.stringify({
              deck: 'This is a great comic',
              keywords: ['space', 'opera', 'war', 'science-fiction'],
              publisher: 'Image',
              cover: 'somewhere.com',
            }),
          });
        })
        .then(() => console.log('Seeding complete'))
        .catch(err => console.log(`Error seeding data: ${err}`)),
      ]);
    })
    .catch(err => console.log(`Error seeding data: ${err}`));
};
