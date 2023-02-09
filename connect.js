const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config()
const connect = async()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.BASE_URL)
        console.log("db connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect;