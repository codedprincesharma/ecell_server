import mongoose from "mongoose";
const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ideaSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    validate: {
      validator: function (value) {
        return emailRegexPattern.test(value);
      },
      message: "please enter a valid email",
    },
    unique: true,
  },

  idea: {
    type: String,
    required: true,
  }
})


const Idea = mongoose.model("Idea", ideaSchema)

export default Idea