/**
 * User Model Schema
 * Defines the structure and behavior of user documents in the database
 * Includes authentication methods and token generation
 */

import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import brcrypt from "bcrypt";

// Define the user schema with all required fields and validations
const userSchema = new Schema({
    // Username field with indexing for faster queries
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    // Email field with validation
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    // Full name field with indexing
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    // Profile picture URL (stored in Cloudinary)
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    // Cover image URL (optional)
    coverImage: {
        type: String, // cloudinary url
    },
    // Array of video references for watch history
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
    ],
    // Hashed password field
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    // Refresh token for JWT authentication
    refrestToken: {
        type: String,
    }
}, {timestamps: true}); // Automatically add createdAt and updatedAt fields

// Middleware to hash password before saving
// Only hashes if password is modified
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    
    this.password = await brcrypt.hash(this.password, 10);
    next();
});

// Method to verify password during login
userSchema.methods.isPasswordCorrect = async function(password){
    return await brcrypt.compare(password, this.password);
};

// Method to generate JWT access token
// Includes user details in the token payload
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN}
    );
}

// Method to generate JWT refresh token
// Only includes user ID for security
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN}
    );
}

// Create and export the User model
export const User = mongoose.model("User", userSchema);