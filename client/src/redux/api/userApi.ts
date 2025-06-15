import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Post = {
  username: string;
  password: string;
  fullname: string;
  gender: string;
};

export const userApis = createApi({
  reducerPath: 'userApis',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8800/api/v1/user/' }),
  endpoints: (builder) => ({
    registerHook: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: `register`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterHookMutation } = userApis;
