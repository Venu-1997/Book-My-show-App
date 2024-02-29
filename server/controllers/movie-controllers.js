import Movie from "../models/movie-models.js";
import Theatre from "../models/theatre-model.js";


export const createMovie = async(req,res) => {
    
    const movieData = req.body;
    try{
        const theatre = await Theatre.findOne({ name: movieData.theatre?.name}); // Checking theatre if exists
        if(!theatre) theatre = await Theatre.create(movieData.theatre); // If not exists we create a new one
        const data = await Movie.create({...movieData,theatre : theatre._id});//it will create info along with theatre name
        res.status(200).send(data);
    }
    catch(e){
        res.status(500).send(e);
    }
}

export const getMovies = async(req,res) => {
    const type = req.query.type;
    const title = req.query.title;
    let queryFilter = {};
    if(title) queryFilter.title = new RegExp(title,'g');
    switch(type){
        case 'ALL': break;
        case 'UPCOMING': {
            queryFilter.releaseDate = { $gt: new Date() } ;
            break;
        }
        case 'LIVE': {
            queryFilter.releaseDate = { $lte: new Date() };
            break;
        }
        default: break;
    }
    try{
        const data = await Movie.find(queryFilter);
        res.status(200).send(data);
    }
    catch(e){
        res.status(404).send(e);
        console.log(e);
    }
}