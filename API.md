# Video Streaming Platform API Documentation

## Base URL
```
http://localhost:8000/api/v1
```

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. Most endpoints require a valid JWT token in the Authorization header:
```
Authorization: Bearer <access_token>
```

## User Management

### Register User
```http
POST /users/register
```
Register a new user with profile picture and cover image.

**Request Body (multipart/form-data):**
- `username` (string, required): Unique username
- `email` (string, required): Valid email address
- `fullName` (string, required): User's full name
- `password` (string, required): User's password
- `avatar` (file, required): Profile picture
- `coverImage` (file, optional): Cover image

**Response (201):**
```json
{
    "statusCode": 200,
    "data": {
        "username": "string",
        "email": "string",
        "fullName": "string",
        "avatar": "string",
        "coverImage": "string"
    },
    "message": "User registered Successfully"
}
```

### Login User
```http
POST /users/login
```
Authenticate user and get access tokens.

**Request Body:**
```json
{
    "email": "string",
    "username": "string",
    "password": "string"
}
```

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {
        "user": {
            "username": "string",
            "email": "string",
            "fullName": "string",
            "avatar": "string",
            "coverImage": "string"
        },
        "accessToken": "string",
        "refreshToken": "string"
    },
    "message": "User logged In Successfully"
}
```

### Logout User
```http
POST /users/logout
```
Logout user and invalidate tokens.

**Headers:**
- `Authorization: Bearer <access_token>`

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {},
    "message": "User logged Out"
}
```

### Refresh Token
```http
POST /users/refresh-token
```
Get new access token using refresh token.

**Request Body:**
```json
{
    "refreshToken": "string"
}
```

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {
        "accessToken": "string",
        "refreshToken": "string"
    },
    "message": "Access token refreshed"
}
```

### Change Password
```http
POST /users/change-password
```
Change user's password.

**Headers:**
- `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
    "oldPassword": "string",
    "newPassword": "string"
}
```

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {},
    "message": "Password changed successfully"
}
```

### Get Current User
```http
GET /users/current-user
```
Get current user's profile.

**Headers:**
- `Authorization: Bearer <access_token>`

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {
        "username": "string",
        "email": "string",
        "fullName": "string",
        "avatar": "string",
        "coverImage": "string"
    },
    "message": "User fetched successfully"
}
```

### Update Account Details
```http
PATCH /users/update-account
```
Update user's account information.

**Headers:**
- `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
    "fullName": "string",
    "email": "string"
}
```

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {
        "username": "string",
        "email": "string",
        "fullName": "string",
        "avatar": "string",
        "coverImage": "string"
    },
    "message": "Account details updated successfully"
}
```

### Update Avatar
```http
PATCH /users/avatar
```
Update user's profile picture.

**Headers:**
- `Authorization: Bearer <access_token>`

**Request Body (multipart/form-data):**
- `avatar` (file, required): New profile picture

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {
        "avatar": "string"
    },
    "message": "Avatar updated successfully"
}
```

### Update Cover Image
```http
PATCH /users/cover-image
```
Update user's cover image.

**Headers:**
- `Authorization: Bearer <access_token>`

**Request Body (multipart/form-data):**
- `coverImage` (file, required): New cover image

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {
        "coverImage": "string"
    },
    "message": "Cover image updated successfully"
}
```

### Get User Channel Profile
```http
GET /users/c/:username
```
Get a user's channel profile.

**Headers:**
- `Authorization: Bearer <access_token>`

**Response (200):**
```json
{
    "statusCode": 200,
    "data": {
        "username": "string",
        "fullName": "string",
        "avatar": "string",
        "coverImage": "string",
        "subscribersCount": "number",
        "channelsSubscribedToCount": "number",
        "isSubscribed": "boolean",
        "videos": []
    },
    "message": "User channel fetched successfully"
}
```

### Get Watch History
```http
GET /users/history
```
Get user's video watch history.

**Headers:**
- `Authorization: Bearer <access_token>`

**Response (200):**
```json
{
    "statusCode": 200,
    "data": [
        {
            "videoFile": "string",
            "thumbnail": "string",
            "title": "string",
            "description": "string",
            "duration": "number",
            "views": "number",
            "owner": {
                "username": "string",
                "fullName": "string",
                "avatar": "string"
            }
        }
    ],
    "message": "Watch history fetched successfully"
}
```

## Error Responses

### 400 Bad Request
```json
{
    "statusCode": 400,
    "message": "Error message",
    "errors": []
}
```

### 401 Unauthorized
```json
{
    "statusCode": 401,
    "message": "Unauthorized request"
}
```

### 404 Not Found
```json
{
    "statusCode": 404,
    "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
    "statusCode": 500,
    "message": "Internal server error"
}
``` 