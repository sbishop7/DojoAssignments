let mongoose = require('mongoose');

let AnimalSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    species: { type: String, required: true, minlength: 2},
    description: { type: String, required: true, minlength: 2}
}, { timestamps: true });

let Animal = mongoose.model('Animal', AnimalSchema);