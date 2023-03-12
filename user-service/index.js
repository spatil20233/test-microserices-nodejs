import express from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import router from './routes.js';
import mongoUrl, { portNumber } from './config.js'

//sameer_patil LetMePass123 spatil02021

mongoose.connect(mongoUrl, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express()

app.use(bodyParser.json())


app.use('/users',router)

app.get('/', (req,res) => {
  res.send({portNumber : portNumber})
  res.end()
})


app.listen(portNumber, () => {
   console.log('Listening on port : ',  portNumber)
})