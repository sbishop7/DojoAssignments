let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let session = require("express-session");

let app = express();

let PORT = 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: "MySecretCode_Buwahahaha"}));

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
});
app.get("/results", (req, res) => {
    let formResults = {
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment
    }
    res.render("results", formResults);
})

app.post("/process", (req, res) => {
    console.log("POST DATA \n\n", req.body);
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comments;
    console.log(req.session.name);
    res.redirect("/results");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})