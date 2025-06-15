import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userServerApi = createApi({
  reducerPath: "userServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api/v1/user/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `register`,
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userServerApi;
