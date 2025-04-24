/**
 * Main entry point of the application
 * This file handles server initialization, database connection, and environment configuration
 */

// Import required dependencies
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

// Load environment variables from .env file
dotenv.config({
    path: "./env"
});

// Connect to MongoDB and start the server
connectDB().then(() => {
    // Once database is connected, start the Express server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`|| 8000);
    });
}).catch((error) => {
    // Handle database connection errors
    console.log("Error connecting to MongoDB", error);
});

/* 
// Alternative database connection approach (commented out)
// This shows a different way to handle async database connection
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
})()
*/