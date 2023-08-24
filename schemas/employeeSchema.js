const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    startingOn: {
        type: Date,
        required: true
    },
    advance: {
        type: String,
        required: true
    },
    payableDue: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = employeeSchema