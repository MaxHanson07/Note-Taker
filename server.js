// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Notes (DATA)
// const notes = [];

// Create HTML Routes

// Get /notes returns notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

// Get * returns index.html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
// db.json stores and retrieves notes using fs module TODO:

// Create API routes

// Get /api/notes reads db.json and returns all saved notes as JSON
// TODO:
app.get("/api/notes", function(req, res) {
    return res.json(db.json);
  });

// Post api/notes recieves a new note and saves it to db.json and returns new note to client
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newNote = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newNote);
  
    // notes.push(newCharacter);
  
    res.json(newNote);
  });

// Delete /api/notes/:id Recieves querey parameter containing note id
    // Must give each note a unique id when saved
    // Delete notes by iterating over all saved notes until finding note with matching id