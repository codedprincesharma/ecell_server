import mongoose from "mongoose";

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
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
    password: {
      type: String,
      minlength: [6, "password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: "user",
    },
    classRollNo: {
      type: String,
    },
    linkedinProfile: { type: String },
    githubProfile: { type: String },
    department: {
      type: String,
    },
    whatsappNo: {
      type: Number,
    },

  },
  { timestamps: true }
);



const User = mongoose.model("User", userSchema);

export default User;
