import User from './model.js';
import axios from 'axios'

const getOrderByUserId = async (request, response) => {
  const url = `http://localhost:8000/users/640968e9a6e7f26d6f169310`
  const userExists = await axios.get(url);
  if (!userExists.data) {
    return response.status(200).send({message: 'User Not found'});
  }

  const pdUrl = `http://localhost:3000/products/640988b81166f401bf8069fe`
  const productExists = await axios.get(pdUrl);
  if (!productExists.data) {
    return response.status(200).send({message: 'Product Not found'});
  }
  
  const users = await User.find({ userId: request.params.id }).populate('userId').populate('productId')
  if (!users.length) {
    return response.status(200).send({message: 'Order Not found'});
  }
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
};


export const createNewOrder = async(request, response) => {
  const user = new User(request.body);
  console.log(user)
  try {
    const url = `http://localhost:8000/users/640968e9a6e7f26d6f169310`
    const userExists = await axios.get(url);
    console.log(userExists.data)

    if (userExists.data.message == 'User Not found') {
      return response.status(400).send({message: 'User Not found'});
    }

    request.body.userId = userExists.data
    console.log('request.body: ', request.body)
    
    const pdUrl = `http://localhost:3000/products/640988b81166f401bf8069fe`
    const productExists = await axios.get(pdUrl);
    console.log(productExists.data)
    if (!productExists.data.message=='Product Not found') {
      return response.status(400).send({message: 'Product Not found'});
    }

    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const updateOrder = async (request, response) => {
  const filter = {_id:request.body._id}
  try {

    const users = await User.findById({ _id: request.body._id });

    if (!users) {
      return response.status(200).send({message: 'User Not found'});
    }
    const update = await User.updateOne(filter, request.body);
    response.send(update);
  } catch (error) {
    response.status(500).send(error);
  }
}

export const deleteOrder = async (request, response) => {
  const filter = { _id: request.params.id }

  try {
    const users = await User.findById(filter);

    if (!users) {
      return response.status(200).send({message: 'User Not found'});
    }

    const deleteValue = await User.deleteOne(filter);
    response.send(deleteValue);

  } catch (error) {
    response.status(500).send(error);
  }
}

export default getOrderByUserId
