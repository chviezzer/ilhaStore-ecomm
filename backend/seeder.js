import mongoose from 'mongoose'
import dotenv from 'dotenv' // to bring mongo url here
import colors from 'colors'
import USERS from './data/usersData.js'
import PRODUCTS from './data/productsData.js'
import User from './models/usersModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()

    const createdUsers = await User.insertMany(USERS)

    const adminUser = createdUsers[0]._id

    const sampleProducts = PRODUCTS.map((dataProduct) => {
      return { ...dataProduct, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
