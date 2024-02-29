import mongoose from 'mongoose';

mongoose.set('strictQuery',false);

const connectToDataBase = async () => {
    try {
        const { connection } = await mongoose.connect(`mongodb+srv://rvenu1997:${process.env.DATABASE_PASSWORD}@cluster0.c6mwvms.mongodb.net/bookmyshow?retryWrites=true&w=majority`);
        if(connection) console.log(`Connected to Database : ${connection.host}`);
    }
    catch(e){
        console.log(e);
    }
}

export default connectToDataBase;

