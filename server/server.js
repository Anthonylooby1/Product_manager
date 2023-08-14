const express = require("express")
const app = express()
require('dotenv').config()
const cors = require('cors')


require("./configs/mongoose.config")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
require('./routes/product.route')(app)



app.listen(8000,()=>console.log("we are listening..."))