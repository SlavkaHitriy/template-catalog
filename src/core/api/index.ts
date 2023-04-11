import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "./axios-base-query";
import { Genres } from "./dto/genre";
import { MovieDetails, Movies } from "./dto/movies";

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
      getGenres: builder.query<Genres, any>({
         query: () => ({
            url: "/genre/movie/list",
            method: "get",
            params: {
               api_key: process.env.REACT_APP_API_KEY,
            },
         }),
      }),
      getSearchedMovies: builder.query<Movies, string>({
         query: (query: string) => ({
            url: "/search/movie",
            method: "get",
            params: {
               api_key: process.env.REACT_APP_API_KEY,
               query,
            },
         }),
      }),
      getMovieDetails: builder.query<MovieDetails, number>({
         query: (id: number) => ({
            url: `/movie/${id}`,
            method: "get",
            params: {
               api_key: process.env.REACT_APP_API_KEY,
            },
         }),
      }),
      getSimilarMovies: builder.query<Movies, number>({
         query: (id: number) => ({
            url: `/movie/${id}/similar`,
            method: "get",
            params: {
               api_key: process.env.REACT_APP_API_KEY,
            },
         }),
      }),
   }),
});

export const {
   useGetPopularMoviesQuery,
   useGetGenresQuery,
   useGetSearchedMoviesQuery,
   useGetMovieDetailsQuery,
   useGetSimilarMoviesQuery,
} = moviesApi;
