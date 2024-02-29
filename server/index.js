import express from 'express';
import UserRouter from './routes/user-routes.js';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDataBase from './config/db-config.js';
import MovieRouter from './routes/movie-routes.js';
import cors from 'cors';
import ShowRouter from './routes/show-routes.js';

config();//run the env file

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use('/api/user', UserRouter);
app.use('/api/movies', MovieRouter);
app.use('/api/show',ShowRouter);

app.use('*',(req,res) => {
    res.status(404).send('Page not found');
});

app.listen(5050,async() => {
    await connectToDataBase();
    console.log('Server is running in http://localhost:5050');
});