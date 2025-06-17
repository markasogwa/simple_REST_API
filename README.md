#﻿# simple_REST_API
# Express Item CRUD API
This is a simple Express.js application featuring CRUD operations with proper validation and error handling.
It uses an in-memory datastore (array) — perfect for prototyping or learning Express fundamentals.

# Features
✅ Create, Retrieve, Update, and Delete items
✅ Proper validation for IDs, names, and descriptions
✅ Meaningful error messages and appropriate response codes (400, 404, 500)
✅ In-memory datastore (array) — no database dependency
✅ Express router with well-structured endpoints
✅ Error handlers for invalid routes and server-side issues

# Requirements
|- Node.js (v14 or newer)
|- npm (typically bundled with Node)
|- Express package

# Installation
|- mkdir express-item-crud
|- cd express-item-crud

# Setup
|- npm init -y
|- npm install express
You can create an app.js file in your directory and paste the application code into it.

# Running the Application
|- node app.js
Your application should be up and running at: http://localhost:3000

/////////////////////////////////////////////////////////////////////////
# API Endpoints
## Root Route
|- GET / — Prints a greeting message.
Response (200):
## Hello World.

## Create Item
|- POST /items — Create a new item.
Body (JSON):
```
{
  "name": "shoes",
  "description": "The shoes are beautiful."
}
```
Response (201):
```
{
  "id": 1,
  "name": "shoes",
  "description": "The shoes are beautiful."
}
if Error (400):
{
  "error": "Invalid or missing 'name'"
}
```

# Retrieve All Items
|- GET /items — Retrieve all items.
Response (200):
```
[
  {
    "id": 1,
    "name": "shoes",
    "description": "The shoes are beautiful."
  }
]
```

# Retrieve Item by ID
|- GET /items/:id — Retrieve a single item by its id.
Path Parameter:
id: Item’s id (integer)
Response (200):
```
{
  "id": 1,
  "name": "item-name",
  "description": "item-description"
}
if Error (400):
{
  "error": "Invalid item id"
}
if Error (404):
{
  "error": "Item not found"
}
```

# Update Item by ID
|- PUT /items/:id — Update a single item by its id.
Path Parameter:
id: Item’s id (integer)
Body (JSON):
```
{
   "name": " blue shoes",
   "description": "The shoes are beautiful."
}
```
Response (200):
```
{
  "id": 1,
  "name": " blue shoes",
  "description": "The shoes are beautiful."
}
if Error (400):
{
  "error": "Invalid item id"
}
if Error (404):
{
  "error": "Item not found"
}
```

# Delete Item by ID
|- DELETE /items/:id — Delete a single item by its id.
Path Parameter:
id: Item’s id (integer)
Response (200):
```
{
  "message": "Item successfully deleted"
}
if Error (400):
{
  "error": "Invalid item id"
}
if Error (404):
{
  "error": "Item not found"
}
```

# Error Handling
All invalid routes respond with 404 Not Found.
All server-side errors respond with 500 Internal Server Error with a generic message.

# Contributing
Contributions, bug reports, and suggestions are welcome!
Please feel free to submit a pull request or create an issue.
