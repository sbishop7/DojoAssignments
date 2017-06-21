let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let app = express();

let PORT = 8000;

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "./client/dist")));

require('./server/config/mongoose.js');

let routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});