const fs = require('fs');

const dataBuffer = fs.readFileSync('first.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.name);