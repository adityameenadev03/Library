const express = require('express')
const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router()
// middleware for secure routes 
// to check jwt token and verify user
// router.use(requireAuth)

const {getBooks, getBook} = require('../controllers/booksController')


// get all workouts
router.get('/', getBooks)

// // get single workouts
router.get('/:id', getBook)
// // post a new workoutes
// router.post('/', createWorkout)

// //delete workouts
// router.delete('/:id', deleteWorkout)
// //update workoutes
// router.patch('/:id', updateWorkout)


module.exports = router