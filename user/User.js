const mongoose = require('./Database')


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Username is required']
  },

  email: {
  	type: String,
    required: [true, 'Email is required']
  },
  age: {
    type: Number,
    required: [true, 'Created age is required']
  }
  

})


const Student = mongoose.model('student', schema);

module.exports = Student;