let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let moment = require("moment");

mongoose.Promise = global.Promise;

let app = express();

let PORT = 8000;

mongoose.connect('mongodb://localhost/quoting_dojo');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

let QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quote: { type: String, required: true, minlength: 2},
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);

let Quote = mongoose.model('Quote')

app.get("/", (req, res) => {
    res.render("index", {})
});

app.post("/process", (req, res) => {
  let quote = new Quote( req.body );
  quote.save(function(err) {
    if( err ) {
      res.render( 'index', { errors: quote.errors } );
    } else {
      res.redirect( '/quotes' );
    }
  })
});

app.get("/quotes", (req, res) => {
    Quote.find({}).sort('-createdAt').exec( (err, quotes) => {
        if(err) { console.log(err); }
        console.log(quotes);
        res.render("quotes", { quotes: quotes, moment: moment });
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})