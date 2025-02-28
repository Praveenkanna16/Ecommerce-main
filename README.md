# E-Commerce-FollowAlong
Features

## Authentication Page

User Login and Signup functionality.
Password security.
Token-based authentication for session management.
## Product Page

Displays a list of available products.
Search and filter functionality for efficient product browsing.
## Order Page

View all past orders with relevant details (product name, price, date).
Track the status of current orders.
Payment Gateway

# Tech Stack
## Frontend
React: For building an interactive and dynamic user interface.
Next.js: For server-side rendering and improving performance.
## Backend
Express.js: For building the RESTful API to handle business logic.
Mongoose: For managing the MongoDB database and creating schemas.
## Database
MongoDB: To store user information, product data, orders, and payment records.
# MILESTONE1 :-
Set Up the Development Environment Installed all the necessary tools and dependencies to set up the development environment for the MERN (MongoDB, Express, React, Node.js) stack project. This includes configuring the backend and frontend dependencies to ensure smooth development.
Understand Server-Client Interaction Gained an understanding of how the frontend (React) interacts with the backend (Node.js/Express) using APIs. Focused on how the client sends requests to the server, and how the server processes them and sends back responses.
Set Up a Simple Server Created a basic server using Node.js and Express, laying the foundation for the project. The server is set up to handle API requests and provide a foundation for future endpoints and business logic.
# MILESTONE 2 :-
Create a Structured Folder Hierarchy Designed and implemented a structured folder hierarchy for the project, organizing the files in a way that ensures easy maintainability and scalability for both the frontend and backend.
Set Up React App (Frontend) and Node.js Server (Backend) Frontend: Set up a React app to serve as the user interface for the project. Backend: Configured a Node.js server using Express to handle API requests, providing the foundation for server-side logic and database interaction.
Configure Tailwind CSS for Styling Integrated and configured Tailwind CSS into the project to streamline the styling process and improve the overall design flexibility with utility-first CSS.
Add Optional Extensions for Development Efficiency Installed and configured optional extensions such as Prettier, ESLint, and others to improve code formatting, quality, and overall development workflow.
Build a Functional and Styled Login Page (Frontend) Developed and styled a Login Page for the frontend using React, Tailwind CSS, and connecting it to the backend for user authentication functionality.
# MILESTONE3 :-
Set Up Dedicated Folders for Organizing Backend Code Created dedicated folders for organizing the backend code. This ensures better structure and maintainability of the server-side code, with clear separation of concerns.
Initialized and Configured a Node.js Server Set up a Node.js server using Express to handle API requests. This provides the backbone for the backend, allowing it to process incoming requests and return responses.
Connected the Application to MongoDB Established a connection to MongoDB, enabling the application to store and manage data in a NoSQL database. This allows for flexible data handling and seamless interactions with the backend.
Implemented Basic Error Handling Incorporated basic error handling in the server to ensure smooth operation. This handles potential errors gracefully, improving the reliability and stability of the application.
# MILESTONE4 :-
Create a User Model Designed and implemented a User Model that serves as a blueprint for how user data is structured and stored in the database. This model defines the user schema and the fields that are needed for user-related data.
Create a User Controller Developed a User Controller that handles the logic related to user data. It manages tasks such as adding a new user, retrieving user information, and other user-related operations.
Enable and Configure Multer for File Uploads Configured Multer to handle file uploads in the application. This allows users to upload files (like images) which will be stored appropriately in the system. Multer is set up to handle storage configurations and file validation.
# MILESTONE5 :-
Created a Sign-Up Page in React.

Implemented form validation for: Name (required) Email (valid format required) Password (minimum 2 characters) Password Confirmation (must match password)

Used React Router for navigation.

# Milestone 6: User Registration and Authentication
User Creation Endpoint (/create-user): Implemented an endpoint to create a new user. Validated the email to ensure the user doesn’t already exist. Successfully handled file uploads (e.g., avatar) using multer.

Password Hashing: Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

Error Handling: Incorporated centralized error handling using a custom ErrorHandler class. Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

User Data Storage: Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

Email Notification (Optional): Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

JWT Token Generation: Added a method to generate JWT tokens upon user login (for future use in authentication routes).

# Milestone 7: Create Login Endpoint
Task Completed 
Implemented a login API endpoint.
Accepted user credentials (email/username and password).
Retrieved the corresponding user from the database.
Validated the password using bcrypt.
Compared the entered password with the stored hashed password for authentication.
Generated a JWT token upon successful login for authentication.
Implemented error handling for invalid credentials and server errors.
# MILESTONE 8:-
Design the Homepage Layout. Set up a responsive grid layout to display multiple product cards neatly. Ensured the layout adapts to different screen sizes for a better user experience.
# Milestone 9:-
ProductForm Component
Overview
The ProductForm is a React component for adding products with details like name, description, category, price, stock, and images. Users can upload multiple images with previews and choose a category from a predefined list.

Milestone 10:
Defined the structure of product data Built a POST endpoint to receive product data.

Milestone 11:
Fetches and displays Products Created an API endpoint to fetch all products from the database. Implemented a frontend function to fetch and display product data dynamically. Used useState and useEffect to manage the data lifecycle.

Milestone 12:
Fetch & Display Filtered Products Created an API endpoint to fetch products based on the user's email. Implemented frontend logic to request and display filtered products. Ensured efficient state management using React hooks.

Milestone 13:
Edit Product Functionality Created a PUT API endpoint to update product details in MongoDB. Added an Edit button on the product card. Implemented auto-filled form for editing existing product details. Connected frontend with backend to send PUT requests. Handled errors and ensured data validation.

Milestone 14:- Edit & Delete Product Functionality
Created a PUT API endpoint to update product details in MongoDB. Added an Edit button on the product card. Implemented auto-filled form for editing existing product details. Connected frontend with backend to send PUT requests. Handled errors and ensured data validation. Created a DELETE API endpoint to remove products from MongoDB. Added a Delete button to the product card. Integrated frontend with backend to send DELETE requests.

Milestone 15:
Created a New Nav Component The Navbar should include links to the following pages: Home My Products Add Product Cart

Milestone 16: Product Info Page

Overview

In this milestone, we created a product info page that displays all the product data and allows users to select the quantity and add the items to their cart.

Milestone 17: Cart Functionality Implementation

In this milestone, we implemented the cart functionality, allowing users to add, view, and remove items from their cart. The cart state is managed using localStorage to persist data across page reloads.

Milestone 18:


Backend Endpoint for Cart

In this milestone, we created a backend endpoint to fetch all products inside a user’s cart using their email. This allows the cart page to display the user’s cart items dynamically.

Milestone 19: Cart Page & Quantity Update

In this milestone, we created a cart page UI to display products using the backend endpoint from Milestone 18. Each product has + and - buttons to increase or decrease quantity. Additionally, we implemented a backend endpoint to update product quantity in the cart.

