import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    orders: {
        type: Array,
        default: []
    },
    contactNo: {
        type: String,
        required: true
    },
    picture: String,
});

const User = mongoose.model("Users", userSchema);
export default User;