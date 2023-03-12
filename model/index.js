const mongoose = require('mongoose')

const mongoUrlUser = `mongodb+srv://sameer_patil:LetMePass123@cluster1.7bv0fjh.mongodb.net/testDB?retryWrites=true&w=majority`;
const mongoUrlProduct = `mongodb+srv://sameer_patil:LetMePass123@cluster1.7bv0fjh.mongodb.net/testDB2?retryWrites=true&w=majority`;

const userDB = mongoose.createConnection(mongoUrlUser);
const productDB = mongoose.createConnection(mongoUrlProduct);

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


const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const Product = productDB.model("Product", ProductSchema);

const User = userDB.model("User", UserSchema);

module.exports = {
  add: function (a, b) {
    return a+b
  },
  getUserSchema: function () {
    return User
  },
  getProductSchema: function () {
    return Product
  },
}

