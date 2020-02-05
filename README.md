# Note app | Node.JS

Made with pure node.js with the help of command line args, chalk and file system modules to read, write, update a json file.

## Command Lines

Following are the command lines you can use to update notes:

```bash
Commands:
  app.js add     Add a note.
  app.js remove  Removing a note.
  app.js list    Listing all notes.
  app.js read    Reading notes

Options:
  --help     Show help 
  --version  Show version number  
```

## Usage

### Adding a note

Takes two arguments, body and title.
```javascript
node app.js add --title="Hello" --body="This is my note"
```

### Removing a note

Takes one argument, title.
```javascript
node app.js remove --title="Hello"
```

### Listing all the notes

Takes no arguments
```javascript
node app.js list
```

### Reading a note

Takes one argument, title.
```javascript
node app.js add --title="Hello"
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

[Contact me](https://www.appysharma.com)  
