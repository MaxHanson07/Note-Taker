// Create HTML Routes
    // Get /notes returns notes.html
    // Get * returns index.html

// db.json stores and retrieves notes using fs module

// Create API routes
    // Get /api/notes reads db.json and returns all saved notes as JSON
    // Post api/notes recieves a new note and saves it to db.json and returns new note to client
    // Delete /api/notes/:id Recieves querey parameter containing note id
        // Must give each note a unique id when saved
        // Delete notes by iterating over all saved notes until finding note with matching id