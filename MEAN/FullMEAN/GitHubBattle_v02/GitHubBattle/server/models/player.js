const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema ({
    username: {type: String, required: true},
    score: {type: Number, required: true},
    avatar_url: {type: String, required: false}
}, {timestamps: true})

mongoose.model("Player", PlayerSchema)