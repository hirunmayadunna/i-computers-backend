import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    altNames:{
        type: [String],
        required: false,
        default: []
    },
    price:{
        type: Number,
        required: true
    },
    labelPrice:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: true,
        default : [
            "/images/default-product-01-image.png",
            "/images/default-product-02-image.png",
        ]
    },
    brand:{
        type: String,
        required: false
    },
    model:{
        type: String,
        required: false
    },
    category:{
        type: String,
        required: false
    },
    isAvailable:{
        type: Boolean,
        required: true,
        default: true
    },
    stock:{
        type: Number,
        default: 0
    }

})

const Product = mongoose.model("Product", productSchema)

export default Product