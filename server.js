require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ================= ENGAGING LANDING PAGE =================
app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Card Management REST API</title>
    <style>
      body {
        font-family: Arial;
        background: #020617;
        color: white;
        text-align: center;
        padding-top: 80px;
      }
      .box {
        background: #1e293b;
        padding: 30px;
        border-radius: 12px;
        width: 60%;
        margin: auto;
        box-shadow: 0 0 15px rgba(0,0,0,0.4);
      }
      h1 { color: #38bdf8; }
      .tag { color: #22c55e; }
      hr { border: 1px solid #334155; }
    </style>
  </head>
  <body>
    <div class="box">
      <h1>🚀 Card Management REST API</h1>
      <p>A Production-Ready Backend System for Managing Card Data</p>
      <p class="tag">Live API Deployment Successful ✅</p>
      <hr>
      <h3>API Features:</h3>
      <p>✔ Create Card</p>
      <p>✔ Fetch Cards</p>
      <p>✔ Update Card</p>
      <p>✔ Delete Card</p>
      <hr>
      <h3>Tech Stack:</h3>
      <p>Node.js | Express.js | MongoDB | Mongoose | Railway</p>
      <hr>
      <h3>Available Endpoint:</h3>
      <p>/api/cards</p>
      <hr>
      <p>Developed by <strong>Eshaan Sharma</strong></p>
    </div>
  </body>
  </html>
  `);
});

// ================= ROUTES =================
const cardRoutes = require("./models/Card");
app.use("/api/cards", cardRoutes);

// ================= MONGODB CONNECTION =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ================= PORT BINDING =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
