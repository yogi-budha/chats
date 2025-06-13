import express from "express"
import { getMessagesController, sendMessageController } from "../controllers/message.controller.js"
import { isAuth } from "../middleware/isAuth.js"

const routes  = express.Router()

routes.post("/sendMessage/:id",isAuth,sendMessageController).post("/getMessages/:id",isAuth,getMessagesController)

export default routes