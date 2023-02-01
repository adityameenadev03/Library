const User = require('../model/userModel')

const jwt = require('jsonwebtoken')

const createToken = (_id) => {
 return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const loginUser = async (req, res) => {

    const { email, password } = req.body
    
    try {
    
        const user = await User.login(email, password)

        // create a Token
        const token = createToken(user._id)
        res.status(200).json({ email, token })

    }
    catch(error)
    {
        res.status(400).json({ error: error.message })
    }
}


const signupUser = async (req, res) => {
    const { email, password } = req.body
    try {
        // using the userSchema static method
        const user = await User.signup(email, password)

        
        // create a Token
        const token = createToken(user._id)
        
        res.status(200).json({ email, token })

    }
    catch(error)
    {
        res.status(400).json({ error: error.message })
    }
}

const updateUser =  async (req, res) => {
    const { favBooks } = req.body
    try {
        // // using the userSchema static method
        const user = await User.findOneAndUpdate({_id:req.user._id},{$set: {favoriteBooks: req.body}}, { upsert: true, new: true })
        // const user = await User.findOneAndUpdate({_id:req.user._id}, {favoriteBooks: req.body}, { upsert: true, new: true })

        // // create a Token
        // const token = createToken(user._id)
        
        res.status(200).json({ user })

    }
    catch(error)
    {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}
const getFavBooks =  async (req, res) => {
    // console.log(re)
    try {
        // // using the userSchema static method
        const {favoriteBooks} = await User.findById({_id:req.user._id})
        // const user = await User.findOneAndUpdate({_id:req.user._id}, {favoriteBooks: req.body}, { upsert: true, new: true })

        // // create a Token
        // const token = createToken(user._id)
        
        res.status(200).json({ favoriteBooks })

    }
    catch(error)
    {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}


const getCartItems =  async (req, res) => {
    console.log("hello")
    // console.log(re)
    console.log(req.user._id)
    try {
        // // using the userSchema static method
        const {cartItems} = await User.findById({_id:req.user._id})
        // const user = await User.findOneAndUpdate({_id:req.user._id}, {favoriteBooks: req.body}, { upsert: true, new: true })

        console.log(cartItems)
        // // create a Token
        // const token = createToken(user._id)
        
        res.status(200).json({ cartItems })

    }
    catch(error)
    {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

const updateCartItems = async (req, res) => {
    // const { cartItems } = req.body
    try {
        // // using the userSchema static method
        const user = await User.findOneAndUpdate({_id:req.user._id},{$set: {cartItems: req.body}}, { upsert: true, new: true })
        // const user = await User.findOneAndUpdate({_id:req.user._id}, {favoriteBooks: req.body}, { upsert: true, new: true })

        // // create a Token
        // const token = createToken(user._id)
        
        res.status(200).json({ user })

    }
    catch(error)
    {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    loginUser,
    signupUser,
    updateUser,
    getFavBooks,
    getCartItems,
    updateCartItems
}