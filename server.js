import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './connectDb.js'

const port = process.env.PORT || 5000;

const start = () => {
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();