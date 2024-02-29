import { Schema , model} from 'mongoose';

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    bannerImage: {
        type: String,
        required: true,
    },
    trailerVideo: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    casting: [{
        name: String,
        image: String,
    }],
    duration: {
        type: Number,
    },
    genre: [{
        type:String,
        required: true,
        enum:['Drama','Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-fi', 'Sports', 'Thriller'],
    }],
    releaseDate: {
        type: Date,
        required: true,
    },
    languages: [{
        type: String,
        required: true,
        enum: ['Telugu','Hindi','English','Tamil','Malayalam','Kannada'],
    }],
    theatre: {
        type: Schema.Types.ObjectId,
        ref: "theatres",
        required: true,
    }
});

const Movie = model("Movie",MovieSchema);

export default Movie;












