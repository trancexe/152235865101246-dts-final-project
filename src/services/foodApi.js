import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    searchFood: builder.query({
      query: (query) => `search.php?s=${query}`,
    }),
    detailFood: builder.query({
      query: (key) => `lookup.php?i=${key}`,
    }),
  }),
});

export const { useSearchFoodQuery, useDetailFoodQuery } = foodApi;
