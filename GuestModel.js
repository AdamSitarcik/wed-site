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
});

export default mongoose.model('Guest', GuestSchema);
