
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()
require('dotenv').config()
mongoose.set('strictQuery', true);
// app.use(express.static(path.join(__dirname,'./frontend/build')))

// app.get('*', (req,res)=> {
//   res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
// })

const booksRoutes = require('./routes/books')
const userRoutes = require('./routes/user')

app.use(cors());
app.use(express.json()) // to access data of the body object sent through request

// // middleware
app.use((req, res, next) => {
  console.log(req.path)
  console.log(req.method)
  next()
})

// db
// mongoose.connect("mongodb://127.0.0.1:27017/BookLibrary")
//   .then(() => {
//     app.listen(7000, () => {
//       console.log('connected to db & listening on port', 7000)
//     })
//   })
//   .catch((err) => {
//   })
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 7000 , () => {
      console.log('connected to db & listening on port', 7000)
    })
  })
  .catch((err) => {
  })

app.use('/api/books', booksRoutes)
app.use('/api/user', userRoutes)


