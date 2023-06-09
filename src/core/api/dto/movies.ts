export interface Movies {
   page: number;
   results: Movie[];
   total_pages: number;
   total_results: number;
}

export interface Movie {
   poster_path: string;
   adult: boolean;
   overview: string;
   release_date: Date;
   genre_ids: number[];
   id: number;
   original_title: string;
   original_language: string;
   title: string;
   backdrop_path: string;
   popularity: number;
   vote_count: string;
   video: boolean;
   vote_average: number;
}
