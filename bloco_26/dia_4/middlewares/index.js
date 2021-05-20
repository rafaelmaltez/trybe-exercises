const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  res.status(200)
    .json({
      greetings: `Hello, ${req.body.name}`
    });
});

app.listen(3000, () => { console.log("Listening") });
