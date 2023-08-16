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

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function (value) {
//                 // Count uppercase letters
//                 const uppercaseCount = (value.match(/[A-Z]/g) || []).length;
//                 // Count lowercase letters
//                 const lowercaseCount = (value.match(/[a-z]/g) || []).length;
//                 // Count special characters
//                 const specialCharCount = (value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
//
//                 return uppercaseCount >= 2 && lowercaseCount >= 2 && specialCharCount >= 2;
//             },
//             message:
//                 'Password must contain at least 2 uppercase letters, 2 lowercase letters, and 2 special characters.',
//         },
//     },
// });
//
// const User = mongoose.model('User', userSchema);
//
// module.exports = User;