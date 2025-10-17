// models/Event.model.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String, 
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String, // e.g. "10:00 AM - 2:00 PM"
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
