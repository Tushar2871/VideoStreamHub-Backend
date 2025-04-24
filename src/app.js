/**
 * Express application configuration
 * This file sets up the Express server with necessary middleware and route configurations
 */

// Import core dependencies
import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initialize Express application
const app = express();

// Configure CORS (Cross-Origin Resource Sharing)
// This allows requests from specified origins and enables credentials
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// Configure request body parsing
// JSON payload limit set to 16kb to prevent large payload attacks
app.use(express.json({ limit: "16kb" }));
// URL-encoded data parsing with extended mode enabled
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Parse Cookie header and populate req.cookies
app.use(cookieParser());

// Import route handlers
import userRouter from './routes/user.routes.js';

// Register routes
// All user-related routes will be prefixed with /api/v1/users
app.use("/api/v1/users", userRouter);

// Export the configured Express application
export { app };
