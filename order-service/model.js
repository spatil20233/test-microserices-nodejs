import mongoose from 'mongoose'; 
import model from 'model-service'

// const db2 = mongoose.createConnection('mongodb+srv://sameer_patil:LetMePass123@cluster1.7bv0fjh.mongodb.net/testDB?retryWrites=true&w=majority');
const user = model.getUserSchema()
const product = model.getProductSchema()

const Schema = mongoose.Schema;

// const conversationSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
//   dob: {
//     type: Date,
//     required: true,
//     default: 0
//   },
// });
// const Conversation = db2.model('User', conversationSchema);

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref:user },
  qty: {
    type: Number,
    required: true
  },
  productId: { type: Schema.Types.ObjectId, ref: product },
});

const User = mongoose.model("Order", OrderSchema);
export default User