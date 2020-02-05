const notes = require('./note');
const yargs = require('yargs');

//Config
yargs.version('1.0.1');

//Adding a note
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

//Removing a note
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

//Listing all the notes
yargs.command({
    command: "list",
    describe: "Listing all notes.",
    handler() {
        notes.listNotes();
    }
});

//Reading a note
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
    handler(argv) {
        notes.readNotes(argv.title);
    }
});

yargs.parse();