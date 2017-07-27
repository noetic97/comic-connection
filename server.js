const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

app.get('/api/v1/users', (request, response) => {
  database('users').select()
    .then((users) => {
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/users', (request, response) => {
  console.log(request, 'request');
  const newUser = request.body;

  for (const requiredParameter of ['name', 'username', 'email', 'password' ]) {
    if (!newUser[requiredParameter]) {
      return response
      .status(422)
      .send({error: `Expected format: { name: <String>, username: <String>, email: <String>, password: <String>}. You're missing a "${requiredParameter}" property.`});
    }
  }
  database('users').insert(newUser, 'id')
    .then((newUser) => {
      response.status(201).json({ id: newUser[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/favorites', (request, response) => {
  database('favorites').select()
    .then((favorites) => {
      response.status(200).json(favorites);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/user-favorites/:user_id', (request, response) => {
  database('favorites').where('user_id', parseInt(request.params.user_id, 10)).select()
    .then((favorites) => {
      response.status(200).json(favorites);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`The Comic Connect DB is running on ${app.get('port')}.`);
});
