import User from './model.js';

const getUserById = async (request, response) => {
  const users = await User.findById({ _id: request.params.id });
  if (!users) {
    return response.status(200).send({message: 'User Not found'});
  }
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const createNewUser = async(request, response) => {
  const user = new User(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const updateUser = async (request, response) => {
  const upadteValue = { age: request.body.age }

  const filter = {_id:request.body._id}
  try {

    const users = await User.findById({ _id: request.body._id });

    if (!users) {
      return response.status(200).send({message: 'User Not found'});
    }
    const update = await User.updateOne(filter, upadteValue);
    response.send(update);
  } catch (error) {
    response.status(500).send(error);
  }
}

export const deleteUser = async (request, response) => {
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

export default getUserById
