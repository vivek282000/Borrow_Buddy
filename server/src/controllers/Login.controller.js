import { validationResult } from "express-validator";
import User from "../models/User.js";
import { jsonGenerate } from "../utils/helpers.js";
import { JWT_TOKEN_SECRET, StatusCode } from "../utils/constants.js";
import bcrypt from "bcrypt"
import Jwt  from "jsonwebtoken";

const Login = async (req,res)=>{
    const errors= validationResult(req);
    if(errors.isEmpty())
    {
        const{username,password}=req.body;
        const user=await User.findOne({
            username:username
        });
        if(!user){
            return res.json(jsonGenerate(StatusCode.UNPROCESSABLE,"Username or Password is incorrect"));
        }
        const verified=bcrypt.compareSync(password,user.password);
        if(!verified){
            return res.json(jsonGenerate(StatusCode.UNPROCESSABLE,"Username or Password is incorrect"));
        }
        const token=Jwt.sign({userId:user._id},JWT_TOKEN_SECRET);
        return res.json(jsonGenerate(StatusCode.SUCCESS,"Login Successfuly",{userId:user._id,token:token}));
    }
}
export default Login;