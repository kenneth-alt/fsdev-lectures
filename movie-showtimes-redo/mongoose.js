import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const conn = await mongoose.connect(process.env.MONGO_URI);
console.log(`MongoDB Connected: ${conn.connection.host}`);

export { conn };