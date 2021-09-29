import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import productRoutes from './routes/productsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'
import morgan from 'morgan'

dotenv.config()
const app = express()

connectDB()

/**
 * @desc App midleware
 */

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)

/**
 * @desc Error handler midleware
 */

app.use(notFound)
app.use(errorHandler)

/**
 * @desc Server Activation
 */
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port: ${PORT}`.yellow.bold
  )
)
