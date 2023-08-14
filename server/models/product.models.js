const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
    title: {    
        type: String,
        required: [true, "product required"],
        minLength: [3, "Product must contain at least 3 characters"]
    }, 
    price: {
        type: Number,
        required: [true, "Price required"],
        min: [1, "price must be greater than 1"]
    },
    description: {
        type: String,
        required: [true, "description required"],
        minLength: [3, "description must be greater than 3 characters"]
    }   
    },{timestamps:true})

    const Product = mongoose.model('Product', ProductSchema)
    module.exports = Product