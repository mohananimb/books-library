const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
    },
    year: {
        type: Date,
        trim: true,
        required: true
    }
})

const Books = mongoose.model("Books", bookSchema)

module.exports = Books