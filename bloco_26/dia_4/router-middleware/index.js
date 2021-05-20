const express = require('express');
const simpsons = require('./simpsons');

const app = express();

app.use('/simpsons', simpsons);

app.listen(3000, () => console.log('rodando'));