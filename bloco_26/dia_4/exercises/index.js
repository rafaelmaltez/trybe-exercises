const express = require('express');

const app = express();

const ageMiddleware = (req, res) => {
  req.body.age > 17 ?
    res.status(200).send({ "message": `Hello, ${req.body.name}` }) :
    res.status(401).send({ "message": "Unauthorized" });
}

app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200);
  res.json({ message: 'pong' })
});

app.post('/hello', (req, res) => {
  res.status(200);
  res.send({ "message": `Hello, ${req.body.name}` })
});

app.post('/greetings', ageMiddleware);


app.listen(3000, () => console.log('Rodando na porta 3000'));