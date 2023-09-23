import express from "express"
import Register from "../controllers/Register.controller.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import Login from "../controllers/Login.controller.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { createTodo } from "../controllers/Todo.controller.js";
import { check } from "express-validator";
import { GetTodo } from "../controllers/TodoList.controller.js";
import { MarkTodo } from "../controllers/MarkTodo.controller.js";
import { RemoveTodo } from "../controllers/RemoveTodo.controller.js";


const apiRoute=express.Router();
export const apiProtected=express.Router();

apiRoute.post('/register',RegisterSchema,Register);
apiRoute.post('/login',LoginSchema,Login);

apiProtected.post("/createTodo",[check("desc","Todo desc is required").exists()],createTodo);
apiProtected.post("/marktodo",[check("todo_id","Todo do id is required").exists()],MarkTodo);
apiProtected.post("/deletetodo",[check("todo_id","Todo do id is required").exists()],RemoveTodo);
apiProtected.get("/todolist",GetTodo);

export default apiRoute;