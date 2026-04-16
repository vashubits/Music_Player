const mongoose = require('mongoose')


async function connectDB() {
   await mongoose.connect('mongodb+srv://V4shu:BefCFYNs35FaaUAx@cluster0.59d60tt.mongodb.net/Music_Player')
   console.log("mongodb connection successfull")
}

module.exports = connectDB