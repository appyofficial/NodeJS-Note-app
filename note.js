const fs = require('fs');

//getting notes
const getNotes = function () { return "notes..." };

//adding notes
const addNotes = function (title, body) {
    const notes = loadNotes();

    notes.push({
        title: title,
        body: body
    });

    saveNotes(notes);
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