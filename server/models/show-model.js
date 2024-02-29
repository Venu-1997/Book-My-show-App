import {Schema,model} from 'mongoose';

const ShowSchema = new Schema({
    dateTime: {
        type: Date,
        required: true,
    },
    language: {
        type: String,
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'movie',
        required: true,
    },
    theatre: {
        type: Schema.Types.ObjectId,
        ref: 'theatre',
        required: true,
    },
    totalSeats:{
        type: Number,
    },
    availableSeats: {
        type: Number,
    },
    seats: [
        {
            category: String,
            price: Number,
            arrangement: [[
                {
                    seatNumber: String,
                    status: String,
                }
            ]]
        }
    ]
});

const Show = model('Show',ShowSchema);

export default Show;