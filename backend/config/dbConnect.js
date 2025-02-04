import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log('MongoDB Connected Successfully');
        });
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

export default connectDb;
