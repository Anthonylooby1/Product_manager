const mongoose = require("mongoose")
const uri = process.env.URI

console.log(uri)

mongoose.connect(uri)
.then(() => console.log("established a connection to the database"))
.catch(err=> console.log("something went wrong connecting to database",err))