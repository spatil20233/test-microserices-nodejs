import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    default: 0,
  },
  dob: {
    type: Date,
    required: true,
    default: 0
  },
});

const User = mongoose.model("User", UserSchema);

export default User