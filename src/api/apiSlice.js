import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Define API with base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/" }),
  endpoints: (builder) => ({
    getAllLists: builder.query({
      query: () => "/7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
  }),
});

export const { useGetAllListsQuery } = apiSlice;
