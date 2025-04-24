/**
 * Multer Middleware Configuration
 * Handles file uploads in the application
 * Configures storage location and filename for uploaded files
 */

import multer from "multer";

// Configure disk storage for file uploads
const storage = multer.diskStorage({
    // Set the destination directory for uploaded files
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    // Set the filename for uploaded files
    filename: function (req, file, cb) {
      // Use the original filename for the uploaded file
      cb(null, file.originalname)
    }
})
  
// Create and export multer middleware with storage configuration
export const upload = multer({ 
    storage, 
})