// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

let visitorCount = 0;

app.use(cors()); // Allows frontend to access API

app.get("/api/visit", (req, res) => {
  visitorCount++;
  res.json({ count: visitorCount });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
