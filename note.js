const fs = require('fs');
const chalk = require('chalk');

//getting notes
const getNotes = () => { return "notes..." };

//adding notes
const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
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
module.exports = { getNotes: getNotes, addNotes: addNotes, removeNotes: removeNotes };