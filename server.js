const express = require('express');
const app = express();

<<<<<<< HEAD
app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(3000, () => {
  console.log('The Monstertorium is live! (http://localhost:3000)');
});

=======
app.locals.monsters = [];

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/monsters', (request, response) => {
  response.send({ monsters: app.locals.monsters });
});

app.post('/monsters', (request, response) => {
  const monster = request.body.monster;

  monster.id = monster.id || Date.now();
  app.locals.monsters.push(monster);

  response.status(201).send({ monster: monster });
});

app.put('/monsters/:id', (request, response) => {
  const monster = request.body.monster;
  const id = parseInt(request.params.id, 10);
  const index = app.locals.monsters.findIndex((m) => m.id === id);

  if (index === -1) { return response.sendStatus(404); }

  const oldMonster = app.locals.monsters[index];
  app.locals.monsters[index] = Object.assign(oldMonster, monster);

  return response.sendStatus(204);
});

app.delete('/monsters/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  if (!app.locals.monsters.find((m) => m.id === id)) {
    return response.status(404).send({
      error: `There is no monster with the "id" of ${id}.`
    });
  }
  app.locals.monsters = app.locals.monsters.filter((m) => m.id !== id);
  response.sendStatus(204);
});

if (!module.parent) {
  app.listen(3000, () => {
    console.log('The Monstertorium is live! (http://localhost:3000)');
  });
}

>>>>>>> 8a09e1619b715476137e82d4bd36939cecd68530
module.exports = app;
