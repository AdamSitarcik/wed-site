import express from 'express';
const app = express();
app.use(express.json());
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';

import connectDB from './ConnectDb.js';
import guestRouter from './Routes.js';

app.use('/api', guestRouter);

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
