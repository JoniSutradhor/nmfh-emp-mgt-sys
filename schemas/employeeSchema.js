const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: String,
    designation: String,
    salary: Number,
    startingOn: Date,
    advance: Number,
    payableDue: Number
})

module.exports = employeeSchema