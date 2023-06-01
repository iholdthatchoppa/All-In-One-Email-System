const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gmail: {
    accesstoken: String,
    refreshtoken: String,
  },
  emails: [EmailSchema]
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
