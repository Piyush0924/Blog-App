import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
       
    }
})

const EmailModel = mongoose.models.email || mongoose.model('email', Schema);
export default EmailModel;