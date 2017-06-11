let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let app = express();

let PORT = 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/messageboard_db');

let Schema = mongoose.Schema;

let MessageSchema = new mongoose.Schema({
    name: { type: String, minLength: 4 },
    message: String,
    _comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
});
MessageSchema.path("name").required(true, "Name cannot be blank");
MessageSchema.path("message").required(true, "Message cannot be blank");
mongoose.model("Message", MessageSchema);
let Message = mongoose.model("Message");

let CommentSchema = new mongoose.Schema({
    name: { type: String, minLength: 4 },
    comment: String,
    _message: {type: Schema.Types.ObjectId, ref: "Message"}
});
CommentSchema.path("name").required(true, "Name cannot be blank");
CommentSchema.path("comment").required(true, "Comment cannot be blank");
mongoose.model("Comment", CommentSchema);
let Comment = mongoose.model("Comment");


app.get("/", (req, res) => {
    Message.find({}, false, true).populate("_comments").exec(function(err, messages){
        console.log(messages);
        res.render("index", {messages: messages});
    })
});

app.post("/message", (req, res) => {
    let postMessage = new Message({name: req.body.name, message: req.body.message});
    postMessage.save(function(err){
        if(err){
            console.log(err);
            res.render('index.ejs', {errors: postMessage.errors});
        }
        else {
            console.log("Message saved");
            res.redirect("/")
        }
    })
})

app.post("/comment/:id", (req, res) => {
    console.log("in the save comments section")
    let message_id = req.params.id;
    Message.findOne({_id: message_id}, function(err, message){
        let postComment = new Comment({name: req.body.name, comment: req.body.comment});
        postComment._message = message._id;
        Message.update({_id: message._id}, {$push: {"_comments": postComment}}, function(err){
            console.log(err);
        });
        postComment.save(function(err){
            if(err){
                console.log(err);
                res.render("index", {errors: postComment.errors});
            }
            else {
                console.log("Comment saved");
                res.redirect("/");
            }
        })
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});