import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        profileImg: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "Abc stress"
        },
        phone: {
            type: Number,
            unique: true,
            default: "+8412345678"
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
