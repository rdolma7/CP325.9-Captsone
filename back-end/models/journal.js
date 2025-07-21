import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Journal", journalSchema, "journals");
