const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please Enter Your Name'],
        unique: [true, 'Name Already taken, Enter different name'],
        minlength: [2, 'Name should be atleast 2 characters']
    },
    email: {
        type: String,
        required: [true, 'Please Enter an Email address'],
        validate: [isEmail, 'Please Enter a Valid Email address!'],
        unique: true,
        lowercase: true,
    },
    qualifications: String,
    skills: String,
    bio: String,
}, {
    timestamps: true
});

const User = mongoose.model('user', UserSchema);

module.exports = User;