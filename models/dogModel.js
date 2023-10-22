const mongoose = require("mongose")

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    breed : {
        type: String,
        required: true,
    },
    gender : {
        type: String,
        required: true,
    },
    age : {
        type: Number,
        required: true,
    },
    location : {
        type: String,
        required: true,
    },

})

module.exports =  mongoose.model("Dog", dogSchemaSchema);