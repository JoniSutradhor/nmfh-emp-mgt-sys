const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const employeeSchema = require("../schemas/employeeSchema")
const Employee = new mongoose.model("Employee", employeeSchema)
const checkLogin = require("../middlewares/checkLogin")

//Simple HTML response
router.get("/", (req,res)=> {
    res.set('Content-Type', 'text/html');
    res.send('<h2>Test String</h2>');
})

//Get Employees List
router.get("/list", checkLogin, (req, res)=> {
    Employee.find()
        .then((data)=> {
            res.status(200).json({
                status_code : 200,
                is_data : true,
                message: "Employee retrieve successfully!",
                data
            })
        })
        .catch((err)=> {
            res.status(500).json({
                error: "There was a server side error!"
            })
        })
})


//Get employee details by id
router.get("/:id", async (req, res)=> {

})

//Create Employee
router.post("/create", (req, res)=> {
    const newEmployee = new Employee(req.body)
    newEmployee.save()
        .then(()=> {
            res.status(201).json({
                status_code: 201,
                is_data: false,
                message: "Employee registered successfully!"
            })
        })
        .catch((err)=> {
            res.status(500).json({
                error: "There was a server side error!"
            })
        })
})

//Post multiple Employee
router.get("/all", async (req, res)=> {

})

//Put multiple employee
router.put("/:id", async (req, res)=> {

})

//Delete Employee
router.delete("/:id", async (req, res)=> {

})

module.exports = router
