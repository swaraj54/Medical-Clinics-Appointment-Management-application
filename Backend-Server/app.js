const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Routes/Doctor-routes');

const app = express();

app.use(express.json());
app.use(cors());



mongoose.connect("mongodb+srv://swaraj1920:swaraj1920@cluster0.6yd9l.mongodb.net/Doctor-Appoiment?retryWrites=true&w=majority")
.then(()=>console.log("Connected to Database"))
.then(()=> {app.listen(4500)})
.catch((err)=> console.log(err))

app.use("/doctors", router);