const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        
        const conn = await mongoose.connect(
          "mongodb+srv://Abhay123:mongodb123@mycluster.flfaa.mongodb.net/buglogger?retryWrites=true&w=majority"
        );
 
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB