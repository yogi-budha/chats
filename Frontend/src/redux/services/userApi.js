import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userServerApi = createApi({
  reducerPath: "userServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api/v1/user/",
    credentials: "include", 
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"], 
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `logout`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
      
    }),
    getUserProfile: builder.query({
      query: () => `profile`,
      providesTags: ["User"], // ✅ queries provide
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserProfileQuery, // Optional: to fetch user info
} = userServerApi;
