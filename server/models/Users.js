const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: 'Age must be an integer',
    },
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
