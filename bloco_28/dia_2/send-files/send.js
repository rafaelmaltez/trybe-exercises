const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

const form = new FormData();
form.append('file', stream);

const formheaders = form.getHeaders();

axios.post('http://localhost:3000/files/upload', form, {
  headers: {
    ...formheaders,
  }
})
  .then((response) => console.log(response.status))
  .catch((error) => console.error(error));

