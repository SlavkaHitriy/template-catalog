import React from "react";
import { useParams } from "react-router";

import { useGetGenresQuery, useGetSearchedMoviesQuery } from "core/api";

import { Card } from "../../components/common/Card/Card";
import { Loader } from "../../components/common/Loader";
import { MoviesWrapper } from "../../components/common/MoviesWrapper";
import { Text } from "../../components/common/Text";

import styles from "./index.module.scss";

export const SearchResults = () => {
   const { query } = useParams();
   const { data, error, isLoading } = useGetSearchedMoviesQuery(query || "");
   const { data: genresData } = useGetGenresQuery("");

   if (error) return <div>Something went wrong...</div>;

   return (
      <>
         <div className={styles.searchTop}>
            <div className={"container"}>
               <Text className={styles.searchText} color={"#fff"}>
                  Results for your search{" "}
                  <Text fontWeight={700}>'{query}'</Text>:
               </Text>
            </div>
         </div>
         <div className={"container"}>
            <div>
               {isLoading ? (
                  <Loader />
               ) : (
                  !!data && (
                     <MoviesWrapper>
                        {data.results.map((movie) => (
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
         </div>
      </>
   );
};
