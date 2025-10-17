// models/Register.model.js
import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      enum: [
        "Electrical Engineering",
        "Computer Science & Engineering",
        "Information Technology",
        "Electronics & Communication Engineering",
        "Artificial Intelligence and Machine Learning",
        "Data Science Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Biotechnology",
        "Food Technology",
        "Applied Electronics & Instrumentation Engineering",
      ],
    },
    classRollNo: {
      type: String,
      required: [true, "Roll number is required"],
      unique: true,
      match: /^[0-9]{2}\/[A-Z]{2,3}\/[0-9]{2}$/, // Matches 24/EE/72
    },
    year: {
      type: String,
      required: [true, "Year is required"],
      enum: ["First Year", "Second Year", "Third Year", "Forth Year"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      match: /^[0-9]{10}$/, // 10 digits
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", registerSchema);

export default Register;
