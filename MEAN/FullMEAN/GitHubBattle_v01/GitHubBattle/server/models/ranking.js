const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema({
    username: {type: String, required: true},
    score: {type: Number, required: true},
    avatar_url: {type: String, required: true}
}, {timestamps: true})

mongoose.model("Ranking", RankingSchema)