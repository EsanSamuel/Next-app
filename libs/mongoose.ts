import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect('mongodb+srv://esansamuel555:sam111@cluster0.nti2nhp.mongodb.net/')
        console.log('Connected to mongodb')
    } catch (error) {
        console.log(error)
    }

}

export default connectDB