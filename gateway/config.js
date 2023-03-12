import dotenv from 'dotenv'
dotenv.config();

export const portNumber = process.env.PORT

const ports = {
  USER_SERVICE_PORT: process.env.USER_SERVICE_PORT,
  PRODUCT_SERVICE_PORT: process.env.PRODUCT_SERVICE_PORT,
  ORDER_SERVICE_PORT: process.env.ORDER_SERVICE_PORT
}

export const { USER_SERVICE_PORT , PRODUCT_SERVICE_PORT , ORDER_SERVICE_PORT } = ports
