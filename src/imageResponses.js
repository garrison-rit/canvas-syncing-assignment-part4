const fs = require('fs'); // pull in the file system module

const mario = fs.readFileSync(`${__dirname}/../client/mario.jpg`);
const luigi = fs.readFileSync(`${__dirname}/../client/luigi.jpg`);

const getMario = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpg' });
  response.write(mario);
  response.end();
};

const getLuigi = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpg' });
  response.write(luigi);
  response.end();
};

module.exports.getLuigi = getLuigi;
module.exports.getMario = getMario;
