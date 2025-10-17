// controllers/event.controller.js
import Event from "../models/event.model.js";
import imagekit from "../utlis/imagekit.utlis.js";

// Create Event with Image Upload
export const createEventController = async (req, res) => {
  try {
    const { title, description, date, time, venue } = req.body;
    const file = req.file; // multer or any upload middleware required

    if (!title || !description || !date || !time || !venue) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (!file) {
      return res.status(400).json({ success: false, message: "Banner image is required" });
    }

    // Upload image to ImageKit
    const result = await imagekit.upload({
      file: file.buffer, // buffer from multer
      fileName: file.originalname,
      folder: "/events", // optional folder
    });

    // Create event
    const event = new Event({
      title,
      description,
      date,
      time,
      venue,
      banner: result.url, // ImageKit URL
    });

    await event.save();

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error("Create Event Error:", error);
    res.status(500).json({ success: false, message: "Server error, please try again later" });
  }
};


export const getAllEventsController = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // upcoming events first

    if (!events || events.length === 0) {
      return res.status(404).json({ success: false, message: "No events found" });
    }

    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      events,
    });
  } catch (error) {
    console.error("Get All Events Error:", error);
    res.status(500).json({ success: false, message: "Server error, please try again later" });
  }
};

// GET /api/v1/events/:id
export const getSingleEventController = async (req, res) => {
  try {
    const eventId = req.params.id;

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({
      success: true,
      message: "Event fetched successfully",
      event,
    });
  } catch (error) {
    console.error("Get Single Event Error:", error);
    res.status(500).json({ success: false, message: "Server error, please try again later" });
  }
};