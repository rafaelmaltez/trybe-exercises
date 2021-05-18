const fs = require('fs');

function writeToFile(fileName, fileContent) {
  fs.writeFileSync(`${__dirname}/${fileName}`, fileContent);
  return 'OK';
}

module.exports = writeToFile;