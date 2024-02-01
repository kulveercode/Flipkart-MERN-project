import mongoose from "mongoose";


export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.xa9fycy.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected Successfullyy');
    } catch (error) {
        console.log(`error while connecting with database`, error.message);
    }
}

export default Connection;
