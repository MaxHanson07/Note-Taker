// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
const db = require("./db/db.json")
console.log(db)
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// Create HTML Routes

// Get /notes returns notes.html
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Create API routes

// Get /api/notes reads db.json and returns all saved notes as JSON
app.get("/api/notes", function (req, res) {
  return res.json(Object.values(db));
});

// Post api/notes recieves a new note and saves it to db.json and returns new note to client
app.post("/api/notes", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newNote = req.body;

  const noteId = Math.floor(1000 * Math.random())

  db[noteId] = {
    id: noteId,
    ...newNote
  }

  fs.writeFileSync("./db/db.json", JSON.stringify(db))
  res.json(newNote);
});

// Delete /api/notes/:id Recieves querey parameter containing note id
// Must give each note a unique id when saved
// Delete notes by iterating over all saved notes until finding note with matching id
app.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id

  delete db[id]

  fs.writeFileSync("./db/db.json", JSON.stringify(db))

  res.json({});
})

// Get * returns index.html
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});