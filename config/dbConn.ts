import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.DATABASE_URI || '', {
        });
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.error("-----Error connecting to DB-----\n", err);
        process.exit(1);
    }
};

export default connectDB;
