import React from "react";
import { useParams } from "react-router";

import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { Card } from "../../components/common/Card/Card";
import { Loader } from "../../components/common/Loader";
import { MoviesWrapper } from "../../components/common/MoviesWrapper";
import { Text } from "../../components/common/Text";
import {
   useGetGenresQuery,
   useGetMovieDetailsQuery,
   useGetSimilarMoviesQuery,
} from "../../core/api";

import styles from "./index.module.scss";

export const Movie = () => {
   const { id } = useParams();
   const { data, error, isLoading } = useGetMovieDetailsQuery(id ? +id : 0);
   const { data: similarData, isLoading: similarIsLoading } =
      useGetSimilarMoviesQuery(id ? +id : 0);
   const { data: genresData } = useGetGenresQuery("");

   if (error) return <div>Something went wrong...</div>;

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : (
            !!data && (
               <>
                  <InfoBlock {...data} />
                  <div className={styles.wrapper}>
                     <div className={"container"}>
                        <div className={styles.movieInfo}>
                           <Text fontSize="20px" color="#828282" mr={"7px"}>
                              More <Text fontWeight={700}>similar</Text> movies
                           </Text>
                        </div>
                     </div>
                  </div>
                  <div className={"container"}>
                     {similarIsLoading ? (
                        <Loader />
                     ) : (
                        !!similarData && (
                           <MoviesWrapper>
                              {similarData.results.map((movie) => (
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
            )
         )}
      </>
   );
};
