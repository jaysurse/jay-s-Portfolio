const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://jaysurse07:<db_password>@cluster0.bexivlo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Visitor model
const VisitorSchema = new mongoose.Schema({
    count: { type: Number, default: 0 }
});
const Visitor = mongoose.model("Visitor", VisitorSchema);

// Initialize visitor count if not exists
app.get("/init", async (req, res) => {
    const doc = await Visitor.findOne();
    if (!doc) await new Visitor().save();
    res.send("Initialized");
});

// Increase and return count
app.get("/visit", async (req, res) => {
    const visitor = await Visitor.findOne();
    visitor.count++;
    await visitor.save();
    res.json({ count: visitor.count });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
