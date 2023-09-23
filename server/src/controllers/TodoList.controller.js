import User from "../models/User.js"
import { StatusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";



export const GetTodo=async (req,res)=>{
    try {
        const list=await User.findById(req.userId)
        .select("-password")
        .populate("todos")
        .exec();
        return res.json(jsonGenerate(StatusCode.SUCCESS,"ALL Todo List",list));
    }
    catch(error){
        return res.json(jsonGenerate(StatusCode.UNPROCESSABLE,"Error",error));
    }
};