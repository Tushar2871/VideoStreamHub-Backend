/**
 * Video Model Schema
 * Defines the structure and behavior of video documents in the database
 * Includes pagination support for efficient video listing
 */

import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define the video schema with all required fields and validations
const videoSchema = new Schema({
    // Video file URL stored in Cloudinary
    videoFile: {
        type: String, // cloudinary url
        required: true
    },
    // Thumbnail image URL for video preview
    thumbnail: {
        type: String, // cloudinary url
        required: true
    },
    // Video title
    title: {
        type: String, 
        required: true
    },
    // Video description
    description: {
        type: String, 
        required: true
    },
    // Video duration in seconds
    duration: {
        type: Number, 
        required: true
    },
    // View count with default value of 0
    views: {
        type: Number,
        default: 0
    },
    // Publication status
    isPublished: {
        type: Boolean,
        default: true
    },
    // Reference to the user who uploaded the video
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true}) // Automatically add createdAt and updatedAt fields

// Add pagination plugin for efficient video listing
// This enables aggregate-based pagination which is more efficient than skip/limit
videoSchema.plugin(mongooseAggregatePaginate)

// Create and export the Video model
export const Video = mongoose.model("Video", videoSchema);