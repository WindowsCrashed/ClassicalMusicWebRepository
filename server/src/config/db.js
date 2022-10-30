import mongoose from 'mongoose'

export async function connectDb() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/pieces')
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log(error)
    }
}
