import Idea from "../models/idea.model.js";

export const createIdea = async (req, res) => {
  try {
    const { name, email, idea } = req.body;

    const newIdea = new Idea({ name, email, idea });
    await newIdea.save();

    res.status(201).json({ message: "Idea submitted successfully", data: newIdea });
  } catch (error) {   
    res.status(400).json({ message: error.message });
  }
};



