const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const attendanceSchema = require("../schemas/attendanceSchema")
const checkLogin = require("../middlewares/checkLogin");
const Attendance = new mongoose.model("Attendance", attendanceSchema)

//Get Attendance by ID and Date Range
router.get("/:id/:startDate/:endDate", async (req, res)=> {
    Attendance.find({id : req.params.id, date : {
            $gte: req.params.startDate,
            $lt: req.params.endDate
        }})
        // .select({
        //     _id: 0,
        //     createdAt :0,
        //     id: 0,
        //     _v: 0
        // })
        .then((data)=> {
            if (data.length > 0) {
                res.status(200).json({
                    status_code: 200,
                    is_data: true,
                    data,
                    message: "Attendance retrieved successfully!"
                })
            }else {
                res.status(404).json({
                    status_code: 404,
                    is_data: false,
                    data : null,
                    message: "No Attendance Found!"
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                error: err+"There was a server side error!"
            })
        })
})

//Get attendance taken or not result by date
router.get("/:date", async (req, res)=> {
    Attendance.find({date : req.params.date})
        .then((data)=> {
            console.log("DATA : ",data)
            if (data.length > 0) {
                res.status(200).json({
                    status_code: 200,
                    is_data: false,
                    isAttendanceInserted : true,
                    message: "Attendance already inserted!"
                })
            } else {
                res.status(200).json({
                    status_code: 200,
                    is_data: false,
                    isAttendanceInserted : false,
                    message: "Attendance Not Found!"
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                error: err+"There was a server side error!"
            })
        })
})

//Create Attendance
router.post("/attendance/create", (req, res)=> {
    const newAttendance = new Attendance(req.body)
    Attendance.insertMany(req.body)
        .then(()=> {
            res.status(201).json({
                status_code: 201,
                is_data: false,
                message: "Attendance was inserted successfully!"
            })
        })
        .catch((err)=> {
            res.status(500).json({
                error: err+"There was a server side error!"
            })
        })
})

module.exports = router