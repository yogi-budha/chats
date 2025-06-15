import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userServerApi } from './services/userApi';

export const store = configureStore({
  reducer: {
    [userServerApi.reducerPath]: userServerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userServerApi.middleware),
});

setupListeners(store.dispatch);