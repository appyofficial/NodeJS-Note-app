const notes = require('./note');
const yargs = require('yargs');
const chalk = require('chalk');

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
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

//Remove
yargs.command({
    command: "remove",
    describe: "Removing a note.",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
});

//List
yargs.command({
    command: "list",
    describe: "Listing all notes.",
    handler() {
        notes.listNotes();
    }
});

//Read
yargs.command({
    command: "read",
    describe: "Reading notes",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: String
        }
    },
    handler() {
        console.log("Reading all the notes.");
    }
});

yargs.parse();