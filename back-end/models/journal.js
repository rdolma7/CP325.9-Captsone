import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Parent", parentSchema, "parents");
