import { Message } from "../models/messageModel.js";
import { Conversatation } from "../models/conversationalModel.js";

export const sendMessageController = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const message = req.body

    let getConversatation = await Conversatation.findOne({
        participents:{$all:[senderId,receiverId]}
    })


    if(!getConversatation){
        getConversatation = await Conversatation.create({
            participents:[senderId,receiverId]
        })
    }

   const newmessage =  await Message.create({senderId,receiverId,message:message.message})
   


   if(newmessage){

       getConversatation.messages.push(newmessage._id)
   }

   await getConversatation.save()

   return res.status(200).json({message:"successfully created the message"})


  } catch (error) {
    console.log(error);
  }
};

export const getMessagesController = async (req,res)=>{
    try {
        const senderId = req.id
        const recieverId = req.params.id

        const getMessagesAll = await Conversatation.findOne({participents:{$all:[senderId,recieverId]}}).populate("messages")

        res.status(200).json({message:"successfully get all message",getMessagesAll:getMessagesAll.messages})
    } catch (error) {
        console.log(error)
    }
}
