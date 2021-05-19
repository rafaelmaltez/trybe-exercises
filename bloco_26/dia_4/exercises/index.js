const express = require('express');

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200);
  res.json({ message: 'pong' })
});

app.post('/hello', (req, res) => {
  res.status(200);
  res.send({ "message": `Hello, ${req.body.name}` })
});


app.listen(3000, () => console.log('Rodando na porta 3000'));