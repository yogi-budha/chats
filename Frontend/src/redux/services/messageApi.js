import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageServerApi = createApi({
  reducerPath: "messageServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api/v1/",
    credentials: "include",
  }),
   tagTypes: ["User"],
  endpoints: (builder) => ({
    getfriends: builder.query({
        query: () => `user/getOtherUser`,
        providesTags: ["User"],
         invalidatesTags: ["User"],
        
    }),
       getUserMessage: builder.query({
         query: (id) => `message/getMessages/${id}`,
         providesTags: ["User"],
          invalidatesTags: ["User"],
     
    }),

    sendMessage: builder.mutation({
      query: (data) => ({
        url: `message/sendmessage/${data.id}`,
        method: "POST",
        body: data.message,
      }),
      invalidatesTags: ["User"],
    }),

    
  }),
});

export const { useGetfriendsQuery,useGetUserMessageQuery,useSendMessageMutation } = messageServerApi;

// http://localhost:8800/api/v1/message/sendmessage/68503aee205921b25b2c9ed3