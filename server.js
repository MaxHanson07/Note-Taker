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
// Displays all characters TODO:
app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });

// Post api/notes recieves a new note and saves it to db.json and returns new note to client
// Delete /api/notes/:id Recieves querey parameter containing note id
    // Must give each note a unique id when saved
    // Delete notes by iterating over all saved notes until finding note with matching id