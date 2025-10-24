Tabour Bakery Web App 🍞

A demo full-stack project built to showcase frontend, backend, and React skills.
Users can browse bakery items, add them to a cart, and place orders that are sent to the backend. Orders are temporarily stored in memory—this project is for demonstration purposes only.

This project was bootstrapped with create-react-app for the frontend and Node.js/Express for the backend.

Getting Started
Prerequisites

Before running the app locally, make sure you have the following installed:

Node.js (v16 or higher recommended)

npm, yarn, or pnpm

No database setup is required as orders are stored temporarily in memory.

Installation

Clone the repository:

git clone https://github.com/natisis0/tabour-bakery.git
cd tabour-bakery


Install frontend dependencies:

cd frontend
npm install


Install backend dependencies:

cd ../backend
npm install

Running the Development Server

Start the backend server:

cd backend
node server.js



Start the frontend server:

cd frontend
npm run dev


Open http://localhost:3000
 in your browser to see the app.

You can start editing the frontend in src or the backend in backend—the servers will auto-reload changes.

Features

Browse all bakery items 🥐🍰

Add items to a cart 🛒

Submit orders to the backend (stored temporarily in memory)

Demonstrates frontend-backend interaction 🔄

Responsive design for desktop and mobile

Tech Stack

Frontend: React.js, CSS

Backend: Node.js, Express.js

HTTP Requests: Axios

Development Tools: Git, VS Code

How It Works

Users browse bakery items on the frontend.

Add items to the cart.

Submit an order, which is sent to the backend via API.

The backend temporarily holds the order in memory.

⚠️ Note: Orders are not persisted in a database. This project is for demonstration purposes.

API Overview

Base URL: http://localhost:3000

Method	Endpoint	Description
GET	/food	Fetch all food items
POST	/order	Submit an order (stored in memory)
Contributing

This is mainly a personal project, but contributions are welcome!

Fork the repository

Create a branch: git checkout -b feature-name

Make changes and commit: git commit -m "Add feature"

Push and open a pull request