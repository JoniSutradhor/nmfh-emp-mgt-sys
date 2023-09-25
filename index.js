const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const attendanceHandler = require("./routeHandler/attendanceHandler")
const employeeHandler = require("./routeHandler/employeeHandler")
const userHandler = require("./routeHandler/userHandler")

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.config = {
    port : 4000
}
let corsOptions = {
    origin: ['http://localhost:3000' , 'https://nmfh-emp-mgt.sss-infotech.xyz', 'http://nmfh-emp-mgt.sss-infotech.xyz', 'https://main.d3ax5bafjnc1of.amplifyapp.com/']
};

// database connection with mongoose
// mongoose.connect(process.env.MONGO_URI_LOCAL_DB)
// mongoose.connect(process.env.MONGO_URI_LOCAL)
mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("Connection Successful with MongoDB"))
    .catch((err)=> console.log("ERR : ",err))

app.use("/user", cors(corsOptions), userHandler)
app.use("/employee", cors(corsOptions), employeeHandler)
app.use("/attendance", cors(corsOptions), attendanceHandler)

app.listen(process.env.PORT || app.config.port, ()=> {
    console.log(`App listening at port ${process.env.PORT || app.config.port}`)
})