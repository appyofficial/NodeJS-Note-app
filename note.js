const fs = require('fs');

//getting notes
const getNotes = function () { return "notes..." };

//adding notes
const addNotes = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log("New Note Added!");
    } else {
        console.log("Note's title taken. No notes added!");
    }
};

//saving notes
const saveNotes = function (note) {
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync('notes.json', dataJSON);
}

//loading notes
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

//exporting
module.exports = { getNotes: getNotes, addNotes: addNotes };