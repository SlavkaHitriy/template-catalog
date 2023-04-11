import React, { useState } from "react";

import { Card } from "components/common/Card/Card";

import { useGetGenresQuery, useGetPopularMoviesQuery } from "../core/api";

import { SortBlock } from "./SettingsSort/SortBlock";
import { Loader } from "./common/Loader";
import { MoviesWrapper } from "./common/MoviesWrapper";

export const Content = () => {
   const [activeSort, setActiveSort] = useState<string>("date");

   const { data, error, isLoading } = useGetPopularMoviesQuery("");
   const { data: genresData } = useGetGenresQuery("");

   if (error) return <div>Something went wrong...</div>;

   const sortData = (sort: string) => {
      switch (sort) {
         case "date":
            return data?.results
               .slice()
               .sort(
                  (a, b) =>
                     new Date(b.release_date).getTime() -
                     new Date(a.release_date).getTime()
               );
         case "rate":
            return data?.results
               .slice()
               .sort((a, b) => b.vote_average - a.vote_average);
         default:
            return data?.results;
      }
   };

   const sortedData = sortData(activeSort);

   return (
      <>
         <SortBlock activeSort={activeSort} setActiveSort={setActiveSort} />
         <div className={"container"}>
            {isLoading ? (
               <Loader />
            ) : (
               !!sortedData && (
                  <MoviesWrapper>
                     {sortedData.map((movie) => (
                        <Card
                           key={movie.id}
                           genres={genresData?.genres}
                           {...movie}
                        />
                     ))}
                  </MoviesWrapper>
               )
            )}
         </div>
      </>
   );
};
