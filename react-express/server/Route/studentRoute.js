const express = require("express");
const router = express.Router();
const Student = require("../Models/studentSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post('/register', async (req, res) => {
  try {
    const { userName, age, email, password } = req.body;

    // Server-side validation
    if (!userName || !age || !email || !password) {
      return res.status(400).json({
        message: 'Validation error',
        error: 'All fields (userName age, email, password) are required.'
      });
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new Student instance with the hashed password
    const student = new Student({ userName, age, email, password: hashedPassword });

    // Save the student to the database
    await student.save();

    // Send a success response
    res.status(201).json({ message: 'Student registered successfully', student });
  } catch (error) {
    // Send an error response
    res.status(400).json({ message: 'Error registering student', error: error.message });
  }
});


router.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Server-side validation
    if (!userName || !password) {
      return res.status(400).json({
        message: 'Validation error',
        error: 'userName and password are required.'
      });
    }

    // Find the student by email
    const student = await Student.findOne({ userName });
    if (!student) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Create a JWT token
    const token = jwt.sign({ id: student._id },"confidential",{ expiresIn: '24h' });
    // localStorage.setItem(token)
    // Send the token to the client
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

router.put('/update/:userName', async (req, res) => {
  try {
    const { userName } = req.params;
    const { email, age, password } = req.body;

    // Validate the username parameter
    if (!userName) {
      return res.status(400).json({
        message: 'Validation error',
        error: 'username parameter is required.'
      });
    }

    // Create an update object and hash the password if provided
    const updateFields = {};
    if (email) updateFields.email = email;
    if (age) updateFields.age = age;
    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updateFields.password = hashedPassword;
    }

    // Update the student details
    const updatedStudent = await Student.findOneAndUpdate(
      { userName },
      updateFields,
      // { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Send a success response
    res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    res.status(400).json({ message: 'Error updating student', error: error.message });
  }
});


// Delete route
router.delete('/delete/:userName', async (req, res) => {
  try {
    const { userName } = req.params;

    // Find and delete the student
    const deletedStudent = await Student.findOneAndDelete({userName});

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Send a success response
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting student', error: error.message });
  }
});

router.get('/details/:userName', async (req, res) => {
  try {
    const { userName } = req.params;

    // Find the student by username
    const student = await Student.findOne({ userName });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Send a success response
    res.status(200).json({ message: 'Student details retrieved successfully', student });
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving student details', error: error.message });
  }
});

module.exports = router;
