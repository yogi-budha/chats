import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages:[]
}

const messageSlice = createSlice({
  name: 'Message',
  initialState,
  reducers: {
    setMessages:(state,action)=> {
      state.messages = action.payload
    },

  },
})

export const { setMessages } = messageSlice.actions
export default messageSlice.reducer