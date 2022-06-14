const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
 },{
    timestamps: true
 })

 const User = mongoose.model('User', UserSchema)

 module.exports = User