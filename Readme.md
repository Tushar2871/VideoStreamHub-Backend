# Video Streaming Platform Backend

A robust and scalable backend implementation for a video streaming platform, built with modern technologies and best practices. This project demonstrates expertise in building RESTful APIs, handling video streaming, user authentication, and database management.

## 🚀 Features

- **User Authentication & Authorization**
  - Secure user registration and login
  - JWT-based authentication
  - Role-based access control
  - Cookie-based session management

- **Video Management**
  - Video upload and streaming capabilities
  - Video metadata management
  - Efficient video storage and retrieval

- **Subscription System**
  - Subscription model implementation
  - User subscription management
  - Access control based on subscription status

## 🛠️ Technical Stack

- **Runtime Environment**
  - Node.js
  - Express.js framework
  - MongoDB database

- **Key Technologies**
  - JWT for authentication
  - Multer for file uploads
  - Cookie Parser for session management
  - CORS for cross-origin resource sharing
  - Cloudinary for media storage

## 🏗️ Architecture

The project follows a clean and modular architecture:

```
src/
├── controllers/     # Business logic implementation
├── models/         # Database schemas and models
├── routes/         # API route definitions
├── middlewares/    # Custom middleware functions
├── utils/          # Utility functions
└── db/            # Database configuration
```

## 🔒 Security Features

- Secure password hashing
- JWT token-based authentication
- Protected routes and endpoints
- Input validation and sanitization
- CORS configuration for secure cross-origin requests

## 🎯 API Endpoints

### User Management
- POST `/api/v1/users/register` - User registration
- POST `/api/v1/users/login` - User authentication
- GET `/api/v1/users/profile` - Get user profile
- PATCH `/api/v1/users/profile` - Update user profile

### Video Management
- POST `/api/v1/videos` - Upload new video
- GET `/api/v1/videos` - Get video list
- GET `/api/v1/videos/:id` - Get specific video
- DELETE `/api/v1/videos/:id` - Delete video

## 💻 Technical Implementation Details

### Database Schema Design
- User Model with authentication fields
- Video Model with streaming metadata
- Subscription Model for premium features

### Middleware Implementation
- Authentication middleware for protected routes
- File upload middleware using Multer
- Error handling middleware
- Request validation middleware

### Performance Optimizations
- Efficient database queries
- Proper indexing
- Response caching
- File upload optimization

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/video-streaming-platform.git
   cd video-streaming-platform
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory
   - Copy the following variables and set your values:
     ```
     PORT=8000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     CORS_ORIGIN=your_frontend_url
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```

4. Start the server
   ```bash
   npm start
   ```

5. For development with auto-restart
   ```bash
   npm run dev
   ```

## 🔍 Code Quality & Best Practices

- Clean code architecture
- Proper error handling
- Input validation
- Security best practices
- Modular and maintainable code structure
- Comprehensive API documentation

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- Backend development with Node.js and Express
- Database design and management with MongoDB
- RESTful API design and implementation
- Authentication and authorization
- File handling and streaming
- Error handling and debugging
- Code organization and modularity
- Security best practices
- API documentation


## 🙏 Acknowledgments

- Express.js team for the amazing framework
- MongoDB team for the powerful database
- All open-source contributors whose work made this project possible
