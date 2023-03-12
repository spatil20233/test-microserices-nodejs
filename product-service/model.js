import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const User = mongoose.model("Product", ProductSchema);

export default User