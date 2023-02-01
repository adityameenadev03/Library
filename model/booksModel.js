
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const booksSchema = new Schema({
    title:{
        type : String,
        required: true
    },
    url: {
        type: String,
        required:true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    summary: {
        type: String,
    }
},{timestamps:true})

//  creating and then exporting the Workout model using workoutSchema,
module.exports = mongoose.model('book', booksSchema)
//  CRUD operation can be done in this Workout documents in the MongoDB database.