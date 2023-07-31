const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const todoHandler = require("./routeHandler/todoHandler")
const attendanceHandler = require("./routeHandler/attendanceHandler")
const employeeHandler = require("./routeHandler/employeeHandler")
const userHandler = require("./routeHandler/userHandler")

const app = express()
// dotenv.config()
app.use(express.json())
// app.use(cors({
//     origin: ['http://localhost', 'https://localhost/']
// }));
app.use(express.urlencoded({ extended: false }));

// database connection with mongoose
// mongoose.connect("mongodb://127.0.0.1/2023")
// mongoose.connect("mongodb+srv://jksutradhor:ISDsweJ0ni@cluster0.s3uxi6e.mongodb.net/2023?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://jksutradhor:ISDsweJ0ni@cluster0.6ujfotr.mongodb.net/2023?retryWrites=true&w=majority")
    .then(()=> console.log("Connection Successful with MongoDB"))
    .catch((err)=> console.log("ERR : ",err))

app.use("/", employeeHandler)
app.use("/emp", attendanceHandler)
app.use("/user", userHandler)
// app.use("/emp", employeeHandler)
// app.use("/emp-attn", attendanceHandler)
// app.use("/user", userHandler)

app.listen(4000, ()=> {
    console.log("App listening at port 4000")
})