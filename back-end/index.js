import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Journal from "./models/journal.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to Database");

app.get("/", (req, res) => {
  res.json("Testing!");
});

app.get("/journal", async (req, res) => {
  try {
    const journals = await Journal.find({});
    res.json(journals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/journals", async (req, res) => {
  try {
    const journal = await Journal.create(req.body);
    res.status(200).json(journal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("./journals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const journal = await Journal.findbyIdAndUpdate(id, req.body);
    if (!journal) {
      return res.status(404).json({ message: "Journal not found" });
    } else {
      const updatedItem = await Journal.findById(id);
      res.status(200).json(updatedItem);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/journals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const journal = await Journal.findByIdAndDelete(id);
    if (!journal) {  /*If the entry is not found with that Id, it should throw this error */
      return res.status(404).json({ message: `Journal ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
