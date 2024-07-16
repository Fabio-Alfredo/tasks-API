import 'dotenv/config';
import mongoose from 'mongoose';

export const dbConnection = async()=>{
    const DB_URL = process.env.DB_URI;
    if(!DB_URL){
        throw new Error('DB_URI is not set');
    }
    try{
        await mongoose.connect(DB_URL);
        console.log('Connected to database');
    }
    catch(error){
        console.error('Error connecting to database: ', error);
        process.exit(1);
    }
}