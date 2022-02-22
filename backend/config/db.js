
const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/elearn";
const mongoDb = async () => {
    try {
        await mongoose.connect(db)
         console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}
module.exports = mongoDb







