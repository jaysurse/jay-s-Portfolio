import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ES module workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/visit", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // ✅ Check all forms of local IPs
  const localIps = ["::1", "127.0.0.1", "::ffff:127.0.0.1"];

  const filePath = path.join(__dirname, "count.json");
  const data = JSON.parse(fs.readFileSync(filePath));

  if (!localIps.includes(ip)) {
    data.count += 1;
    fs.writeFileSync(filePath, JSON.stringify(data));
  }

  res.json({ count: data.count });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
