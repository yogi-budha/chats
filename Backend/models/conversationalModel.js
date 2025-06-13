import mongoose,{Schema} from "mongoose";

const convertionalSchema = new Schema({
    participents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    ],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
            ref:"message"
    }]
})

export const Conversatation = mongoose.model("conversation",convertionalSchema)