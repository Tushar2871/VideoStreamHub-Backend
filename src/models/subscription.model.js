/**
 * Subscription Model Schema
 * Defines the relationship between subscribers and channels
 * Implements a many-to-many relationship between users
 */

import mongoose, {Schema} from "mongoose";

// Define the subscription schema to track user subscriptions
const subscriptionSchema = new Schema({
    // Reference to the user who is subscribing (the subscriber)
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    // Reference to the user being subscribed to (the channel)
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true}) // Automatically add createdAt and updatedAt fields

// Create and export the Subscription model
export const Subscription = mongoose.model("Subscription", subscriptionSchema)