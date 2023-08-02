const mongoose = require("mongoose")

const attendanceSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    attendance : {
        type: String,
        required: true
    },
    taken: String,
    comments: String,
    updatedAt: Date
})

module.exports = attendanceSchema