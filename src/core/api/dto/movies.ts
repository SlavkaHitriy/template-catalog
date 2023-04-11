import { Genre } from "./genre";

export interface Movies {
   results: Movie[];
}

export interface Movie {
   poster_path: string;
   release_date: Date;
   genre_ids: number[];
   id: number;
   title: string;
   vote_average: number;
}

export interface MovieDetails {
   poster_path: string;
   overview: string;
   release_date: Date;
   genres: Genre[];
   id: number;
   title: string;
   backdrop_path: string;
   vote_average: number;
   runtime: number;
}
