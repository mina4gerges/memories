import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    remember: {
        type: Boolean,
        required: true
    },
}, {timestamps: true});

export default mongoose.model('Users', usersSchema);
