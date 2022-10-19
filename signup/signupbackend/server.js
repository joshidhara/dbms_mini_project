const express = require('express') //importing express
const app = express() // initialising express in app var
const mongoose = require('mongoose')//connecting to db
//to nto type the username and pass in server.js
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')
require('dotenv').config()//activating env
//connect takes the link first but we dont wanna store username and pass in server hence dotenv
mongoose.connect('process.env.DATABSE_ACCESS', ()=>console.log("Database connected"))
//body parser as middleware too
app.use(express.json())// activation
app.use(cors)//initialisation
// we want route as middleware
app.use('/app',routeUrls) //2nd arg appended to base path
app.listen(4000, () => console.log("server is up and running"))

//arrangement of lines in thsi order is imp