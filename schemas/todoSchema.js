const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    // name: "TODO",
    title: {
        type: String,
    },
    // description: {
    //     type: String,
    // },
    description : String,
    status: {
        type: String,
        enum: ["active", "inactive"]
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = todoSchema