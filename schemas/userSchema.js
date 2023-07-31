const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "emp-admin", "employee", "visitor"],
        required: true
    },
    status: {
        type: String,
        enum : ["active", "inactive"]
    }
})

module.exports = userSchema