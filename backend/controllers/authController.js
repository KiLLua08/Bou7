import User from "../models/User.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

export const signup = async (req,res,next) =>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(201).json({message: "User created successfully"})
    } catch (error) {
        next(errorHandler(300,'something went wrong !'));
    }
};

export const signin = async (req,res,next) =>{

};

export const google = async (req,res,next) =>{

};

export const signout = async (req,res,next) =>{

};

