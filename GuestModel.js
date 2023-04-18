import mongoose from 'mongoose';

const GuestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, ''],
        maxlength: 30,
    },
    lastName: {
        type: String,
        required: [true, ''],
        maxlength: 30,
    },
    message: {
        type: String,
    },
    otherGuestNames: [
        {
            name: {
                type: String,
                maxlength: 50,
            },
        },
    ],
    otherGuestNumber: {
        type: Number,
        min: 0,
        max: 7,
    },
});

export default mongoose.model('Guest', GuestSchema);
