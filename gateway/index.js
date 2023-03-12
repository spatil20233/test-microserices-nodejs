import express from 'express';
import cors from 'cors'
import proxy from 'express-http-proxy'

import { portNumber } from './config.js'

//sameer_patil LetMePass123 spatil02021



const app = express()

app.use(cors())
app.use(express.json())

app.use('/user-proxy', proxy('http://localhost:8000'))
//http://localhost:8001/user-proxy/users/640c23ae001f8f2a8e9e290b
app.use('/product-proxy', proxy('http://localhost:3000'))
//http://localhost:8001/product-proxy/products/640c23ae001f8f2a8e9e290b
app.use('/order-proxy', proxy('http://localhost:9000'))
//http://localhost:8001/order-proxy/orders/640968e9a6e7f26d6f169310



app.listen(portNumber, () => {
   console.log('Gateway Listening on port : ',  portNumber)
})