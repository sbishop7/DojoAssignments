const some_notes = []

module.exports = {
    index: (req, res) => {
        res.json(some_notes)
    },
    create: (req, res) => {
        some_notes.push(req.body)
        res.json(true)
    }
}