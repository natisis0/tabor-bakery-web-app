import express from "express";
import fs from "node:fs/promises";

const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/food", async (req, res) => {
  try {
    const foods = await fs.readFile("./data/foods.json", "utf-8");
    res.json(JSON.parse(foods));
  } catch (error) {
    res.status(500).json({ message: "Failed to read foods data" });
  }
});




app.listen(3000, () => {
  console.log("Server running in port 3000");
});
