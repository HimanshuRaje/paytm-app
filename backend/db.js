// backend/db.js
const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://himanshujagtap05:sVZ24zgMLnwkluJo@cluster0.0cnw4.mongodb.net/")
mongoose.connect("mongodb+srv://himanshujagtap05:sVZ24zgMLnwkluJo@cluster0.0cnw4.mongodb.net/")

.then(() => console.log("Connected to MongoDB successfully!"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
};
