import { Schema , model} from 'mongoose';

const BookingSchema = new Schema({
    showId: {
        type: Schema.Types.ObjectId,
        ref: "show"
    },
    seats: [{
        type:String
    }],
    userId:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    transactionId:{
        type:String
    }
});

const Booking = model("Booking",BookingSchema);

export default Booking;