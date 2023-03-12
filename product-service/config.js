import dotenv from 'dotenv'
dotenv.config();

export const portNumber = process.env.PORT

const mongoSettings = {
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASS,
  cluster: process.env.MONGO_CLUSER,
  db:process.env.MONGO_DB
}

const { username , password , cluster , db } = mongoSettings

const mongoUrl = `mongodb+srv://${username}:${password}@${cluster}/${db}?retryWrites=true&w=majority`;



export default mongoUrl