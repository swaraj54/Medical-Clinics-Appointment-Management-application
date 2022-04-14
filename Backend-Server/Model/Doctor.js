const mongoose = require("mongoose");

const schema = mongoose.Schema;

const doctorSchema = new schema({
    name : {type: String, required: true},
    speciality: {type: String, required: true},
    availability: [{type: Number, required: true}, {type: Number, required: true}],
    cost: {type: Number, required: true},
    image: {type: String, required: true},
    date: {type: String, required: false},
    time: {type: String, required: false},
});

module.exports = mongoose.model("doctor", doctorSchema);