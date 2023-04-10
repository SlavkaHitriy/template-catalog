import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "./axios-base-query";
import { Movies } from "./dto/movies";

export const moviesApi = createApi({
   reducerPath: "moviesApi",
   baseQuery: axiosBaseQuery({
      baseUrl: process.env.REACT_APP_API_URL || "https://api.themoviedb.org/3",
   }),
   endpoints: (builder) => ({
      getPopularMovies: builder.query<Movies, any>({
         query: () => ({
            url: "/movie/popular",
            method: "get",
            params: {
               api_key: process.env.REACT_APP_API_KEY,
            },
         }),
      }),
   }),
});

export const { useGetPopularMoviesQuery } = moviesApi;
