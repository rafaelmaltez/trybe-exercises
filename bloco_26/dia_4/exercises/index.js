const express = require('express');
const simpsons = require('./simpsons.json');

const app = express();
app.use(express.json());

const ageMiddleware = (req, res) => {
  req.body.age > 17 ?
    res.status(200).send({ "message": `Hello, ${req.body.name}` }) :
    res.status(401).send({ "message": "Unauthorized" });
}

app.get('/ping', (req, res) => {
  res.status(200);
  res.json({ message: 'pong' })
});

app.post('/hello', (req, res) => {
  res.status(200);
  res.send({ "message": `Hello, ${req.body.name}` })
});

app.post('/greetings', ageMiddleware);

app.put('/users/:name/:age', (req, res) => {
  res.status(200).send({ "message": `Seu nome é ${req.params.name} e você tem ${req.params.age} anos de idade` })
});

app.get('/simpsons', (req, res) => {
  res.status(200).send(simpsons);
});

app.get('/simpsons/:id', (req, res) => {
  const simpson = simpsons.filter(simpson => simpson.id === req.params.id)[0];
  if (!simpson) return res.status(404).send({ "message": "Simpson not found" });
  res.status(200).send(simpson);
});


app.listen(3000, () => console.log('Rodando na porta 3000'));