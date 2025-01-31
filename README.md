# E-Commerce Website (MERN Stack)

A full-stack e-commerce web application built using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack.

## Features
- Add, update, and remove products
- View product catalog

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **API Testing:** Postman

## Installation & Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v16 or later)
- **MongoDB** (local or cloud-based via MongoDB Atlas)
- **Git**

### Steps to Run the Project

#### 1. Clone the repository
```sh
git clone https://github.com/Fariha-Anjum-Aupy/MERN-inventory-website.git
cd MERN-inventory-website
```

#### 2. Install dependencies
Navigate to both the **frontend** and **backend** folders separately and install dependencies:
```sh
cd frontend
npm install
cd ../backend
npm install
```

#### 3. Configure environment variables
Create a `.env` file in the **backend** folder and add the required variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### 4. Start the application
Run the backend:
```sh
cd backend
npm start
```

Run the frontend:
```sh
cd frontend
npm start
```

The website should now be accessible at `http://localhost:3000`.

## Folder Structure
```
/ecommerce-mern
│── /backend          # Node.js & Express backend
│   ├── /config       # Configuration files
│   │   └── db.js     # Database connection setup
│   ├── /controllers  # Business logic for routes
│   │   └── product.controller.js
│   ├── /models       # Mongoose models
│   │   └── product.model.js
│   ├── /routes       # Express API routes
│   │   └── product.route.js
│   ├── server.js     # Main server entry point
│── /frontend         # React.js frontend
│── .gitignore        # Files to ignore in version control
│── jsconfig.json     # JavaScript project configuration
│── package-lock.json # Lockfile for dependencies
│── package.json      # Project dependencies
```

## API Endpoints
### Products
- `GET /api/products` → Fetch all products
- `GET /api/products/:id` → Fetch product by ID
- `POST /api/products` → Add a new product
- `PUT /api/products/:id` → Update a product
- `DELETE /api/products/:id` → Remove a product

