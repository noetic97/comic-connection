
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => knex('favorites').del())
    .then(() => {
      return Promise.all([

        knex('users').insert({
          first_name: 'Joe',
          last_name: 'Heitkamp',
          username: 'noetic',
          email: 'joe@joe.com',
          password: '123456'
        }, 'id')
        .then(favorites => {
          console.log(favorites);
          return knex('favorites').insert({
            title: 'Saga',
            body: JSON.stringify({
              deck: "This is a great comic",
              keywords: ['space', 'opera', 'war', 'science-fiction'],
              publisher: "Image",
              cover: "somewhere.com"
            })
          })
        })
        .then(() => console.log('Seeding complete'))
        .catch(err => console.log(`Error seeding data: ${err}`))
      ])
    })
    .catch(err => console.log(`Error seeding data: ${err}`))
};
