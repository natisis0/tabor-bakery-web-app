🍞 Tabour Bakery Web App

A full-stack web application to showcase my frontend, backend, and React skills.
Browse bakery items, add them to a cart, and place orders sent to the backend. Orders are temporarily stored in memory—this project is meant for skill demonstration, not production.

📋 Table of Contents

About the Project

Features

Tech Stack

Getting Started

How It Works

API Overview

Contributing

License

🔍 About the Project

Tabour Bakery is a skill showcase project that demonstrates:

React frontend with dynamic UI and cart functionality 🛒

Node.js/Express backend handling orders 📦

Frontend-backend interaction using API calls 🔄

⚠️ Orders are temporarily stored in memory. No database is used.

✨ Features

Browse all available bakery items 🥐🍰

Add items to a cart

Submit an order to the backend

Dynamic frontend-backend communication

Responsive design for desktop and mobile

🛠 Tech Stack

Frontend: React.js, CSS / Tailwind CSS

Backend: Node.js, Express.js

HTTP Requests: Axios

Tools: Git, VS Code

🚀 Getting Started

Clone the repository:

git clone https://github.com/natisis0/tabour-bakery.git
cd tabour-bakery


Install dependencies:

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install


Start the servers:

# Backend
node index.js


# Frontend
cd ../frontend
npm run dev




⚙️ How It Works

Users browse bakery items on the frontend.

Items can be added to a cart.

Orders are submitted and sent to the backend via an API call.

The backend temporarily stores the order in memory (for demo purposes).

📡 API Overview

Base URL: http://localhost:5000

Method	Endpoint	Description
GET	/food	Fetch all food items
POST	/order	Submit an order (stored in memory)
🤝 Contributing

This project is mainly for personal portfolio, but contributions are welcome!

Fork the repository

Create a branch: git checkout -b feature-name

Make changes and commit: git commit -m "Add feature"

Push and open a pull request

📝 License

This project is open source under the MIT License.
