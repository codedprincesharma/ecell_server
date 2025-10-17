// controllers/register.controller.js
import Register from "../models/register.model.js";

// Create/Register a new student
export const registerStudentController = async (req, res) => {
  try {
    const { name, department, classRollNo, year, phoneNumber } = req.body;

    // Basic server-side validation
    if (!name || !department || !classRollNo || !year || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if roll number already exists
    const existingStudent = await Register.findOne({ classRollNo });
    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "This roll number is already registered",
      });
    }

    // Create new student
    const newStudent = new Register({
      name,
      department,
      classRollNo,
      year,
      phoneNumber,
    });

    await newStudent.save();

    res.status(201).json({
      success: true,
      message: "Registration successful",
      student: newStudent,
    });
  } catch (error) {
    console.error("Register Student Error:", error);

    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }

    res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

// Get all registered students
export const getAllStudentsController = async (req, res) => {
  try {
    const students = await Register.find().sort({ createdAt: -1 });

    if (!students || students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No students found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      students,
    });
  } catch (error) {
    console.error("Get All Students Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get single student by ID
export const getSingleStudentController = async (req, res) => {
  try {
    const studentId = req.params.id;

    const student = await Register.findById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      student,
    });
  } catch (error) {
    console.error("Get Single Student Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
