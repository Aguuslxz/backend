const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config()
const connect = async()=>{
    try {
        await mongoose.connect(process.env.BASE_URL)
        console.log("connectdatabase")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect;