import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    product: {
        type: Array,
        default: []
    },
    picture: {
        type: String
    },
    gstNo: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;