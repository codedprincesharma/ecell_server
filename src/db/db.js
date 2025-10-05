import mongoose from "mongoose";



const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log('connect to MONGODB')

  } catch (error) {
    console.error('errror', error)
  }

}


export default connectDb