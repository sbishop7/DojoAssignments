let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let app = express();

let PORT = 8000;

mongoose.connect('mongodb://localhost/animals');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

let AnimalSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    species: { type: String, required: true, minlength: 2},
    description: { type: String, required: true, minlength: 2}
}, { timestamps: true });

mongoose.model('Animal', AnimalSchema);

let Animal = mongoose.model('Animal');

app.get("/", (req, res) => {
    Animal.find({}, (err, animals) => {
        if(err) { console.log(err); }
        // console.log(animals);
        res.render("index", { animals: animals });
    });
});

app.get("/new", (req, res) => {
    res.render("new");
})

app.post("/animals", (req, res) => {
    let animal = new Animal( req.body );
    animal.save(function(err) {
        if( err ){
            console.log( err )
            res.render("new", { errors: animal.errors });    
        }
        else{
            res.redirect( "/" );
        }
    })
})

app.get("/:id", (req, res) => {
    Animal.find({ _id: req.params.id }, function(err, animal) {
        if (err) { console.log(err); }
        res.render("details", { animal: animal[0] });
    });
})

app.get("/edit/:id", (req, res) => {
    console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
    Animal.find({ _id: req.params.id }, function(err, animal) {
        if (err) { console.log(err); }
        res.render("edit", { animal: animal[0] });
    });
})

app.post("/:id", (req, res) => {
    Animal.update({ _id: req.params.id }, req.body, (err, result) => {
        if (err) { console.log(err) }
        res.redirect("/")
    })
})

app.post("/destroy/:id", (req, res) => {
    Animal.remove({ _id: req.params.id }, (err, result) => {
        if (err) { console.log(err) }
        res.redirect("/")
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});