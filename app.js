const fs = require('fs');

//fs.writeFileSync('notes.txt', 'The note which you want to write');

fs.appendFileSync('notes.txt', ', This is an extra text');