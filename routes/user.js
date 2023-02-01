const express = require('express')
const requireAuth = require('../middleware/requireAuth.js')


const router = express.Router()


const {loginUser, signupUser, updateUser, getFavBooks, getCartItems, updateCartItems} = require('../controllers/userController')

// login route 
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.use(requireAuth)

router.put('/update', updateUser)

router.get('/favBooks', getFavBooks)

router.get('/getCartItems', getCartItems)

router.put('/updateCartItems', updateCartItems)

module.exports = router