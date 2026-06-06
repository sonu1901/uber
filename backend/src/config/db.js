import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{dbName:'uber'});
        console.log('Database connected successfully.');
    } catch (error) {
        console.log('Failed to Connect. Error : ',error.message);
        process.exit(1);
    }
}