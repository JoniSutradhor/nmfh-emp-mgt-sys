const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: String,
    designation: String,
    salary: Number,
    startingOn: Date,
    advance: Number
})

module.exports = employeeSchema