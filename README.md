Here’s your structured and well-formatted README with proper bold milestone titles:

E-Commerce-FollowAlong

Features

Authentication Page
	•	User Login and Signup functionality
	•	Password security
	•	Token-based authentication for session management

Product Page
	•	Displays a list of available products
	•	Search and filter functionality for efficient product browsing

Order Page
	•	View all past orders with relevant details (product name, price, date)
	•	Track the status of current orders

Payment Gateway
	•	Secure payment processing and transaction tracking

Tech Stack

Frontend
	•	React: For building an interactive and dynamic user interface
	•	Next.js: For server-side rendering and improving performance

Backend
	•	Express.js: For building the RESTful API to handle business logic
	•	Mongoose: For managing the MongoDB database and creating schemas

Database
	•	MongoDB: To store user information, product data, orders, and payment records

Milestones

🔹 Milestone 1 - Set Up the Development Environment
	•	Installed all necessary tools and dependencies for the MERN stack
	•	Configured backend and frontend dependencies for smooth development
	•	Set up a basic Node.js server using Express

🔹 Milestone 2 - Project Structure & Styling Setup
	•	Created a structured folder hierarchy for frontend and backend
	•	Set up a React app (frontend) and Node.js server (backend)
	•	Integrated Tailwind CSS for responsive styling

🔹 Milestone 3 - Backend Server & Database Connection
	•	Created dedicated folders for organizing backend code
	•	Initialized a Node.js server with Express
	•	Connected the application to MongoDB
	•	Implemented basic error handling

🔹 Milestone 4 - User Model & File Uploads
	•	Designed and implemented a User Model
	•	Developed a User Controller to handle user-related operations
	•	Configured Multer for file uploads (profile images, etc.)

🔹 Milestone 5 - Sign-Up Page Implementation
	•	Built a React signup form with validation
	•	Implemented React Router for navigation

🔹 Milestone 6 - User Registration & Authentication
	•	Implemented User Creation Endpoint (/create-user)
	•	Used bcryptjs for password hashing
	•	Integrated JWT Token Generation for authentication

🔹 Milestone 7 - Login Functionality
	•	Created a Login API endpoint
	•	Validated user credentials using bcrypt
	•	Generated a JWT token upon successful login

🔹 Milestone 8 - Homepage Layout
	•	Designed a responsive homepage with product listings

🔹 Milestone 9 - Product Form
	•	Built a ProductForm component for adding product details

🔹 Milestone 10 - Product Data & API Endpoint
	•	Defined the product schema and created a POST API endpoint

🔹 Milestone 11 - Fetch & Display Products
	•	Created an API endpoint to fetch all products
	•	Implemented frontend logic to display products dynamically

🔹 Milestone 12 - Filtered Products Display
	•	Developed an API to fetch user-specific products
	•	Used React hooks (useState, useEffect) for efficient state management

🔹 Milestone 13 - Edit Product Functionality
	•	Created a PUT API endpoint to update product details

🔹 Milestone 14 - Edit & Delete Product
	•	Added edit and delete functionalities in both frontend and backend

🔹 Milestone 15 - Navigation Bar Component
	•	Created a NavBar with links to Home, My Products, Add Product, and Cart

🔹 Milestone 16 - Product Info Page
	•	Implemented a detailed product page with quantity selection

🔹 Milestone 17 - Cart Functionality
	•	Enabled Add to Cart, View Cart, and Remove from Cart functionalities

🔹 Milestone 18 - Backend Endpoint for Cart
	•	Developed an API endpoint to fetch user’s cart products

🔹 Milestone 19 - Cart Page & Quantity Update
	•	Created a cart page UI
	•	Implemented quantity increment/decrement functionality

🔹 Milestone 20 - Profile Page & Backend Endpoint
	•	Designed a user profile page
	•	Created an API endpoint to fetch user data

🔹 Milestone 21 - Address Form
	•	Built a frontend form to collect user addresses

🔹 Milestone 22 - Saving Address in User Profile
	•	Created a backend API to store user addresses

🔹 Milestone 23 - Implementing “Place Order” and Address Selection
	•	Added a “Place Order” button inside the cart page
	•	Created an address selection page to allow users to choose a delivery address
	•	Developed an API endpoint (GET /api/addresses) to fetch all saved addresses
	•	Implemented Mongoose Order Schema to store order details

🔹 Milestone 24 - Implementing Order Confirmation Page
    •    Displayed all products being ordered on the confirmation page
    •    Fetched and displayed the selected delivery address from the database
    •    Calculated and displayed the total cart value dynamically
    •    Added a “Place Order” button to finalize the purchase

🔹 Milestone 25 - Implementing Place Order API
	• Created a backend endpoint to handle order placement
	• Retrieved user ID using the provided email from the database
	• Stored order details (user, address, products, total amount) in MongoDB
	• Ensured each product in the cart was processed as a separate order
	• Implemented error handling for missing fields and invalid requests

🔹 Milestone 26 - Fetching User Orders
	• Created an API to retrieve all orders for a user based on email
	• Retrieved the user’s _id from the database using their email
	• Fetched all orders linked to that user and returned them in the response
	• Implemented error handling for missing users or database errors

🔹 Milestone 27 - My Orders Page
	•	Created a frontend page to display all user orders.
	•	Sent a GET request to the /api/my-orders endpoint to fetch user orders.
	•	Passed user email as a parameter to retrieve their specific orders.
	•	Displayed all orders in a structured format with order details.
	•	Added a “My Orders” page to the navbar for easy navigation.

🔹 Milestone 28 - Cancel Order Feature 
	• Added a Cancel Order button in My Orders page. 
	• Button is hidden for already canceled orders. 
	• Created a backend API to cancel orders by orderId. 
	• Updated order status to "canceled" in the database. 
	• Integrated frontend button with the API.

🔹 Milestone 29 - Integrating PayPal Payment Gateway
	• Created a PayPal Developer Account and set up sandbox accounts.
	• Copied and saved the User ID and Client ID from the PayPal developer dashboard.
	• Added radio buttons for COD and online payment on the order confirmation page.
	• Configured PayPal payment buttons to be displayed when online payment is selected.
	• Prepared the frontend for PayPal payment integration in the next milestone.