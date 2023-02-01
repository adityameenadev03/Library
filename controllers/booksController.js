const Book = require('../model/booksModel')
const mongoose = require('mongoose')

// get all workouts 

const getBooks = async (req,res) => {
  // const user_id = req.user._id
  console.log(req.body)
    try{
        const books = await Book.find()
        res.status(200).json(books)
    }
    catch(error){
        res.status(400).json({eror: error.message})
        
    }

}
// get a single workout 
 
const getBook = async (req,res) => {
    let id = req.params.id
    // if given id is valid or not
if(!mongoose.Types.ObjectId.isValid(id)){
  return  res.status(404).send("there is no such workout with this id")
}
    try{
      const book = await Book.findById(id)
      res.status(200).json(book)
       
    }
    catch(error){
        res.status(400).json({eror: error.message})
        
    }

}

// // create new workout
// const createWorkout =  async (req,res)=> {
//     const {title,load,reps} = req.body
//     let emptyFields = []

//     if (!title) {
//       emptyFields.push('title')
//     }
//     if (!load) {
//       emptyFields.push('load')
//     }
//     if (!reps) {
//       emptyFields.push('reps')
//     }
//     if (emptyFields.length > 0) {
//       return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
//     }
//     try{
//       const user_id = req.user._id
//         // this is async so we await for result
//       const workout = await Workout.create({
//         title,
//         load,
//         reps,
//         user_id
//       })
//       res.status(200).json(workout)
//     //   res.json({msg: 'POST new workouts'})
//     }
//     catch(error){
//         res.status(400).json({eror: error.message})
        
//     }
// }
// // delete a workout 

// // delete a workout
// const deleteWorkout = async (req, res) => {
//     const { id } = req.params
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     const workout = await Workout.findOneAndDelete({_id: id})
  
//     if(!workout) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     res.status(200).json(workout)
//   }
  
//   // update a workout
//   const updateWorkout = async (req, res) => {
//     const { id } = req.params
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     const workout = await Workout.findOneAndUpdate({_id: id}, {
//       ...req.body
//     })
  
//     if (!workout) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     res.status(200).json(workout)
//   }
// update a workout

module.exports = {
  getBooks,getBook
}