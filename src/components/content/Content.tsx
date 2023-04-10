import React from "react";

import { Card } from "components/common/Card/Card";

import { useGetPopularMoviesQuery } from "../../core/api";

import styles from "./index.module.scss";

export const Content = () => {
   const { data, error, isLoading } = useGetPopularMoviesQuery("");

   if (error) return <div>Something went wrong...</div>;

   console.log(data);

   return (
      <div className={"container"}>
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            !!data && (
               <div className={styles.cards}>
                  {data.results.map((movie) => (
                     <Card key={movie.id} {...movie} />
                  ))}
               </div>
            )
         )}
      </div>
   );
};
