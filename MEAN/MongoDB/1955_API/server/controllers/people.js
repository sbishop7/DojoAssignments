let mongoose = require('mongoose');
let People = mongoose.model('People');
module.exports = {
    show_all: (req, res) => {
        People.find({}, (err, people) => {
            if(err) { console.log(err); }
            res.json(people);
        })
    },
    create: (req, res) => {
        People.create(req.params, (err, result) => {
            if (err) { console.log(err); }
            res.redirect("/");
        })
    },
    delete: (req, res) => {
        People.remove(req.params, (err, result) => {
            if (err) { console.log(err); }
            res.redirect("/");
        })
    },
    display: (req, res) => {
        People.find({name: req.params.name}, (err, result) => {
            if (err) { console.log(err); }
            res.json(result);
        })
    }
}