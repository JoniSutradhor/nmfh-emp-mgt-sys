const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const todoSchema = require("../schemas/todoSchema")
const Todo = new mongoose.model("Todo", todoSchema)

//Get all todos
router.get("/", async (req, res)=> {

})


//Get a todo by id
router.get("/:id", async (req, res)=> {

})

//Post todo
router.post("/attendance/create", (req, res)=> {
    const newTodo = new Todo(req.body)
    newTodo.save()
        .then(()=> {
            res.status(201).json({
                message: "Todo was inserted successfully!"
            })
        })
        .catch((err)=> {
            res.status(500).json({
                error: err+"There was a server side error!"
            })
        })
})

//Post multiple todo
router.get("/all", async (req, res)=> {

})

//Put multiple todo
router.put("/:id", async (req, res)=> {

})

//Put multiple todo
router.delete("/:id", async (req, res)=> {

})

module.exports = router