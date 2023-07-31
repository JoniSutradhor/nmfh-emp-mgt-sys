const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = require("../schemas/userSchema")
const User = new mongoose.model("User", userSchema)

//Register User
router.post("/signup", async (req, res)=> {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        role: req.body.role,
        password: hashedPassword
    })
    newUser.save()
        .then(()=> {
            res.status(201).json({
                status_code : 201,
                is_data : false,
                message: "User registration successfully!",
            })
        })
        .catch((err)=> {
            res.status(500).json({
                error: "There was a server side error!"
            })
        })
})

// Login
router.post("/login", async (req, res)=> {
    User.find({username: req.body.username})
        .then((user)=> {
            if (user.length > 0){
                bcrypt.compare(req.body.password, user[0].password)
                    .then((isValidPassword)=> {
                        if (isValidPassword) {
                            //generate token
                            const token = jwt.sign({
                                username: user[0].username,
                                userId: user[0]._id
                            }, "Code Coffee Computer with Malai", {expiresIn: "1h"})
                            res.status(200).json({
                                status_code: 200,
                                is_data: false,
                                data: null,
                                token_data: {
                                    access_token : token
                                },
                                user_data: {
                                  role: user[0].role,
                                },
                                message : "Login Successful!"
                            })
                        }else {
                            res.status(401).json({
                                status_code: 401,
                                is_data: false,
                                data: null,
                                message: "Authentication failed! 1"
                            })
                        }
                    })
                    .catch((err)=> {
                        res.status(401).json({
                            status_code: 401,
                            is_data: false,
                            data: null,
                            message: "Authentication failed! 2"
                        })
                    })
            }else {
                res.status(401).json({
                    status_code: 401,
                    is_data: false,
                    data: null,
                    message: "Authentication failed! 3"
                })
            }
        })
        .catch((err)=> {
            res.status(401).json({
                status_code: 401,
                is_data: false,
                data: null,
                message: "Authentication failed! 4"
            })
        })
})


module.exports = router
