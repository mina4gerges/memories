import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signIn = async (req, res) => {

    try {
        const {email, password} = req.body;

        const existingUser = await User.findOne({email});

        if (!existingUser)
            return res.status(404).json('User does not exist');

        const isPasswordMatched = bcrypt.compare(password, existingUser.password);

        if (!isPasswordMatched)
            return res.status(400).json('Password does not exist');

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: '1h'})

        return res.status(200).json({result: existingUser, token});

    } catch (e) {
        return res.status(500).json('Something went wrong');
    }

}

export const signUp = async (req, res) => {

    try {
        const {email, password, repeatPassword, firstName, lastName, remember} = req.body;

        const existingUser = await User.findOne({email});

        if (existingUser)
            return res.status(400).json('User already exists');

        if (password !== repeatPassword)
            return res.status(400).json('Password does not matched');

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            lastName,
            firstName,
            name: `${firstName} ${lastName}`,
            password: hashedPassword,
            email,
            remember
        });

        const token = jwt.sign({email: newUser.email, id: newUser._id}, 'test', {expiresIn: '1h'});

        return res.status(200).json({user: newUser, token});

    } catch (e) {
        return res.status(500).json('Something went wrong');
    }

}
