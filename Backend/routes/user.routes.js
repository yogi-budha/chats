import express from 'express'
import { getAllOtherUserController, loginController, logoutController, registerController} from '../controllers/user.controller.js'
import { isAuth } from '../middleware/isAuth.js'

const routes = express.Router()

routes.post("/register",registerController).post("/login",loginController).post("/logout",isAuth,logoutController).get("/getOtherUser",isAuth,getAllOtherUserController)


export default routes