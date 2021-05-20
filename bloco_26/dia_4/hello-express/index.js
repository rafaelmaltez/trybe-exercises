const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!!');
});

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000")
})