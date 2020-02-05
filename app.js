const fs = require('fs');
const note = require('./note');
const yargs = require('yargs');

//Config
yargs.version('1.0.1');

//Add
yargs.command({
    command: "add",
    describe: "Add a note.",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: String
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: String
        }
    },
    handler: function (argv) {
        console.log(argv.title);
        console.log(argv.body);
    }
});

//Remove
yargs.command({
    command: "remove",
    describe: "Removing a note.",
    handler: function () {
        console.log("Removing note.");
    }
});

//List
yargs.command({
    command: "list",
    describe: "Listing all notes.",
    handler: function () {
        console.log("Listing all the notes.");
    }
});

//Read
yargs.command({
    command: "read",
    describe: "Reading notes",
    handler: function () {
        console.log("Reading all the notes.");
    }
});

yargs.parse();
//console.log(yargs.argv);






//fs.writeFileSync('notes.txt', 'The note which you want to write');
//fs.appendFileSync('notes.txt', ', This is an extra text');
//console.log(mynote());
//const command = process.argv[2];

