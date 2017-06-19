const mongoose = require("mongoose")
const Note = mongoose.model("Note")

module.exports = {
    index: (req, res) => {
        Note.find()
            .sort('-createdAt')
            .then(data => res.json(data))
            .catch(err => {
                console.log("Note find error", err);
                res.status(500).json(err);
            })
    },
    create: (req, res) => {
        let newNote = new Note(req.body)
        newNote.save()
            .catch(err => {
                res.status(500).json(err)
            })
            .then(() => res.json(true))
    }
}