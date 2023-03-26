import mongoose from 'mongoose';
import validator from 'validator';

const GuestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, ''],
        maxlength: 30,

    },
    note: {
        type: String
    }
});