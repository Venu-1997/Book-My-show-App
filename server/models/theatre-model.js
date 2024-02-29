import { Schema, model} from 'mongoose';

const TheatreSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
});

const Theatre = model('Theatre',TheatreSchema);

export default Theatre;