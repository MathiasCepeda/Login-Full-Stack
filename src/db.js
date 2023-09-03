import mongoose from 'mongoose'


export const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://mathiascepeda98:1234@mathiascluster.aecy9no.mongodb.net/')
        console.log(">>> DB is connected")
    } catch (error){
        console.log(error);
    }
};