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
router.get("/details/:id", async (req, res)=> {
    Employee.find({id:req.params.id})
        .then((data)=> {
            if (data.length > 0) {
                res.status(200).json({
                    status_code: 200,
                    is_data: true,
                    data,
                    message: "Employee data retrieved successfully!"
                })
            }else {
                res.status(404).json({
                    status_code: 404,
                    is_data: false,
                    data : null,
                    message: "No Employee Found!"
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                error: err+"There was a server side error!"
            })
        })
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

//Update Employee
router.put("/update/:id", (req, res)=> {
    Employee.updateOne({_id: req.params.id}, {
        $set : {
            name: req.body.name,
            designation: req.body.designation,
            salary: req.body.salary,
            startingOn: req.body.startingOn,
            advance: req.body.advance,
            payableDue: req.body.payableDue,
            status: req.body.status
        }
    })
        .then(()=> {
            res.status(202).json({
                status_code: 202,
                is_data: false,
                message: "Employee was updated successfully!"
            })
        })
        .catch((err)=> {
            res.status(500).json({
                error: "There was a server side error!"
            })
        })
})

//Delete Employee
router.delete("/delete/:id", async (req, res)=> {
    Employee.deleteOne({_id: req.params.id})
        .then(()=> {
            res.status(202).json({
                status_code: 202,
                is_data: false,
                message: "Employee was deleted successfully!"
            })
        })
        .catch((err)=> {
            res.status(500).json({
                error: "There was a server side error!"
            })
        })
})

module.exports = router
