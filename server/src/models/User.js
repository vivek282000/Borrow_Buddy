import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    name: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	todos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }],
    date:{type:Date,default:Date.now}
})
export default mongoose.model("User",userSchema);