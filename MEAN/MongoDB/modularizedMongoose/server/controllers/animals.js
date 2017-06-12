let mongoose = require('mongoose');
let Animal = mongoose.model('Animal');
module.exports = {
    show_all: (req, res) => {
        Animal.find({}, function(err, animals){
            if(err) { console.log(err); }
            // console.log(animals);
            res.render("index", { animals: animals });
        });
    },
    create: (req, res) => {
        Animal.create(req.body, (err, result) => {
            if( err ){
                console.log( err )    
            }
            res.redirect( "/" );
        })
    },
    show_one: (req, res) => {
        Animal.find({ _id: req.params.id }, function(err, animal) {
            if (err) { console.log(err); }
            res.render("details", { animal: animal[0] });
        });
    },
    edit_mode: (req, res) => {
        console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
        Animal.find({ _id: req.params.id }, function(err, animal) {
            if (err) { console.log(err); }
            res.render("edit", { animal: animal[0] });
        });
    },
    update: (req, res) => {
        Animal.update({ _id: req.params.id }, req.body, (err, result) => {
            if (err) { console.log(err) }
            res.redirect("/")
        })
    },
    delete: (req, res) => {
        Animal.remove({ _id: req.params.id }, (err, result) => {
            if (err) { console.log(err) }
            res.redirect("/")
        })
    }
}