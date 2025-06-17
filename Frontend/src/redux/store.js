import { configureStore } from '@reduxjs/toolkit';
import { userServerApi } from './services/userApi';
import { messageServerApi } from './services/messageApi';
import userReducer from './slice/userSlice.js'
import messageReducer from './slice/messageSlice.js'

export const store = configureStore({
  reducer: {
    [userServerApi.reducerPath]: userServerApi.reducer,
    [messageServerApi.reducerPath]: messageServerApi.reducer,
     user: userReducer,
     message: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userServerApi.middleware).concat(messageServerApi.middleware),
});
