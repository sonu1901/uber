import { Router } from "express";
import { validate } from "../middleware/validate.js";
import { registerUserSchema } from "../validations/user.validation.js";
import { captainRegister, login, userRegister } from "../controller/auth.controller.js";
import { captainRegisterSchema } from "../validations/captain.validation.js";
import { loginSchema } from "../validations/login.validation.js";

const routes = Router();

routes.post('/user',validate(registerUserSchema),userRegister);
routes.post('/captain',validate(captainRegisterSchema),captainRegister);
routes.post('/login',validate(loginSchema),login);

export default routes;