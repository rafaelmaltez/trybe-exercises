const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/homer', (req, res) => {
  res.send("Hello, Homer!")
});

module.exports = router;
