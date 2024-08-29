const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  
  age: {
    type: Number,
    required: true,
    min: 0
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
  }
 
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
