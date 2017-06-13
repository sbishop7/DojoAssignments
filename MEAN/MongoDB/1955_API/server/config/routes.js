let people = require("../controllers/people");

module.exports = (app) => {
    app.get("/", (req, res) => {
        people.show_all(req, res);
    }),
    app.get("/new/:name", (req, res) => {
        people.create(req, res);
    }),
    app.get("/remove/:name", (req, res) => {
        people.delete(req, res);
    })
    app.get("/:name", (req, res) => {
        people.display(req, res);
    })
}