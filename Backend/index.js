import express from "express";
import fs from "node:fs/promises";

import cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// CORS Middleware

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.get("/food", async (req, res) => {
  try {
    const foods = await fs.readFile("data/foods.json", "utf-8");
    res.json(JSON.parse(foods));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error reading foods.json" });
  }
});
app.post("/order", async (req, res) => {
  const orderData = req.body.orders;

  if (!orderData || !orderData.user || !orderData.orderedItems) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  try {
    const existingOrders = await fs.readFile("data/orders.json", "utf-8");
    const orders = JSON.parse(existingOrders);
    orders.push(orderData);
    await fs.writeFile("data/orders.json", JSON.stringify(orders, null, 2));
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error processing order" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Invalid link in the frontend" });
});

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
