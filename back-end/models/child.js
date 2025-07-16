import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true,
        },
        email:{
            type: String, 
            required: true,
        },
        
    }
);

export default mongoose.model("Child", childSchema, "children")