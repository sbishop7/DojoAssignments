const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    text: {type: String, required: true}
}, {timestamps: true})

mongoose.model("Note", NoteSchema)