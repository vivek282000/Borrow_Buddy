import {check} from "express-validator"


export const RegisterSchema=[
    check('name').trim().isAlpha().withMessage("Name Should be Alphabet only"),
    check('username','username is required').exists().isAlphanumeric().withMessage('username should be alphanumeric character').trim().isLength({min:6,max:32}),
    check('password','Passsword is required').isLength({min:6,max:32}).trim(),
    check('email','Email is Required').exists().isEmail(),
]