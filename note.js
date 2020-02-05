const fs = require('fs');
const chalk = require('chalk');

//getting notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.magenta.inverse.italic("YOUR NOTES"));
    notes.forEach(note => {
        console.log(`${notes.indexOf(note) + 1}- ${note.title} : ${note.body}`);
    });
};

//adding notes
const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New Note Added!"));

    } else {
        console.log(chalk.red.inverse("Note's title taken. No notes added!"));
    }
};

//saving notes
const saveNotes = (note) => {
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync('notes.json', dataJSON);
}

//loading notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

//remove notes
const removeNotes = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note was removed'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('OOPS! No notes found.'));
    }
}

//exporting
module.exports = { listNotes: listNotes, addNotes: addNotes, removeNotes: removeNotes };