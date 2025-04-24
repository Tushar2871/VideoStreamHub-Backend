/**
 * User Routes Configuration
 * Defines all user-related API endpoints and their middleware
 */

import {Router} from 'express';
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatchHistory } from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import{verifyJWT} from '../middlewares/auth.middleware.js';

const router = Router();

// Public routes (no authentication required)
// Registration endpoint with file upload middleware
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

// Login endpoint
router.route("/login").post(loginUser)

// Protected routes (authentication required)
// Logout endpoint
router.route("/logout").post(verifyJWT, logoutUser)

// Token refresh endpoint
router.route("/refresh-token").post(refreshAccessToken)

// Password management endpoint
router.route("/change-password").post(verifyJWT, changeCurrentPassword)

// User profile endpoints
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)

// Profile image management endpoints
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

// Channel and history endpoints
router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)

export default router;