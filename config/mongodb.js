import mongoose from "mongoose";

const connectDB = async()=>{
    try{

        // Establishing connection 

        await mongoose.connect(process.env.MONGODB_URI);
     
        //  connected event 

        mongoose.connection.on("connected" , ()=>{
            console.log("Connected to mongoDB Database");
        });

        // disconnected event 

        mongoose.connection.on("disconnected" , ()=>{
            console.log("Disconnected to mongoDB Database");
        })

        // error event 

        mongoose.connection.on('error' , (error)=>{
          console.log('MongoDB connection error ' + error);
        })
    }
    catch(error){
     console.error('Error while connection to database' + error);
     process.exit(1);
    }
}

export default connectDB