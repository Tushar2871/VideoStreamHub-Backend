/**
 * Authentication Middleware
 * Verifies JWT tokens and attaches user information to the request object
 * Used to protect routes that require authentication
 */

import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

/**
 * Middleware to verify JWT token and authenticate users
 * Extracts token from cookies or Authorization header
 * Verifies token and attaches user to request object
 */
export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        // Get token from cookies or Authorization header
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        // Check if token exists
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        // Verify token using JWT
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        // Find user by ID and exclude sensitive fields
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        // Check if user exists
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
    
        // Attach user to request object for use in subsequent middleware/routes
        req.user = user;
        next()
    } catch (error) {
        // Handle any errors during authentication
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})