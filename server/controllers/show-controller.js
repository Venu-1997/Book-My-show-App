import Show from "../models/show-model.js";
import mongoose from "mongoose";


export const createShows = async(req,res) => {
    const showDetails = req.body;
    const data = await Show.create(showDetails);
    res.status(200).send(data); 

}

export const showDetail = async(req,res) => {
    const response = await Show.findById(req.params.showId);
    res.status(200).send(response); 
}

export const listShows = async(req,res) => {
    const movieId = req.query.movie;
    const movieDate = req.query.date;
    try{
        const data = await Show.aggregate([
            {
                $match : { movie : new mongoose.Types.ObjectId(movieId)},
            },{
                $match : { dateTime : {
                    '$gte': new Date(`${movieDate}T00:00:00.000+00:00`),
                    '$lt': new Date(`${movieDate}T23:59:59.999+00:00`)
                }}
            },{
                $group : { _id : "$theatre" , shows : { $push : "$$ROOT"}}
            }
        ]).exec();
        res.status(200).send(data);
    }
    catch(e){
        res.status(504).send(e);
    }
    

}