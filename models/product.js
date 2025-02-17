import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    bgColor: {
        type: String,
        default: '#ffffff'
    },
    textColor: {
        type: String,
        default: '#000000'
    },
    panelColor: {
        type: String,
        default: '#ffffff'
    },
    prodImg: {
        type: String,
        required: true
    }
});

const Product = mongoose.model("Products", productSchema);
export default Product;