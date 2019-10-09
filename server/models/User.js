import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, { timestamps: { createdAt: 'createdAt' }});

const User = model('User', userSchema);

export default User;
