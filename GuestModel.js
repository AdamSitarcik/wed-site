import mongoose from 'mongoose';

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

export default mongoose.model('Guest', GuestSchema);