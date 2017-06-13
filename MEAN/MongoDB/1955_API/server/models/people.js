let mongoose = require('mongoose');

let PeopleSchema = new mongoose.Schema({
    name: { type: String}
});

let People = mongoose.model('People', PeopleSchema);