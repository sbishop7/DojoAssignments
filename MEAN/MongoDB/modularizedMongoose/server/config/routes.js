let animals = require('../controllers/animals')

module.exports = (app) => {
    app.get("/", (req, res) => {
        animals.show_all(req, res);
    });

    app.get("/new", (req, res) => {
        res.render("new");
    })

    app.post("/animals", (req, res) => {
        animals.create(req, res);
    })

    app.get("/:id", (req, res) => {
        animals.show_one(req, res);
    })

    app.get("/edit/:id", (req, res) => {
        animals.edit_mode(req,res);
    })

    app.post("/:id", (req, res) => {
        animals.update(req, res);
    })

    app.post("/destroy/:id", (req, res) => {
        animals.delete(req, res);
    });

}