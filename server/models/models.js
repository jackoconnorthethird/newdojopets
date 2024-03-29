var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

//Below is example create a schema
var PetSchema = new mongoose.Schema({
    name: { type: String, unique: "Pet name bust be unique to the shelter", required: 'Name must be longer than 2 characters', trim: true, minlength: 3},
    type: { type: String, required: 'what kind of animal isnt at least 3 letters?', trim: true, minlength: 3 },
    description: { type: String, required: 'Can you tell us a little more?', trim: true, minlength: 3 },
    skillOne: { type: String, default: "", trim: true },
    skillTwo: { type: String, default: "", trim: true },
    skillThree: { type: String, default: "", trim: true }
},{ timestamps: true });

// PetSchema.plugin(uniqueValidator);
mongoose.model('Pet', PetSchema); // 'DATANAME' , matching DATANAME you set in controllers.js
