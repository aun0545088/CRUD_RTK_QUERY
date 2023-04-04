import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (params) => ({
        url: "login",
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;