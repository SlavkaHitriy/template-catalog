import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Genre } from "../../../core/api/dto/genre";
import { Movie } from "../../../core/api/dto/movies";
import { MovieURLPath } from "../../../core/helpers/routes";
import { strToEllipsis } from "../../../core/helpers/strToEllipsis";
import { Image } from "../Image";
import { Text } from "../Text";

import styles from "./index.module.scss";

interface CardProps extends Movie {
   genres?: Genre[];
}

export const Card: FC<CardProps> = ({
   genres,
   title,
   release_date,
   vote_average,
   genre_ids,
   poster_path,
   id,
}) => {
   return (
      <div className={styles.wrapper}>
         <Link to={MovieURLPath.getUrl(id)} className={styles.movieImgWrapper}>
            <Image
               className={styles.movieImg}
               filePath={poster_path}
               alt="poster"
            />
         </Link>
         <div className={styles.movieInfo}>
            <Link to={MovieURLPath.getUrl(id)}>
               <Text
                  className={styles.movieTitle}
                  color="#3F3F3F"
                  fontWeight="700"
               >
                  {strToEllipsis(title)}
               </Text>
            </Link>
            <Text
               fontSize="18px"
               color="#E34564"
               fontWeight="700"
               pt={"2px"}
               ml={"10px"}
            >
               {vote_average.toFixed(1)}
            </Text>
         </div>
         <div className={styles.movieBottom}>
            <Text fontSize="14px" color="#828282" fontWeight="400">
               {genre_ids
                  .map(
                     (genreId) =>
                        genres?.find((genre) => genre.id === genreId)?.name ||
                        "Unknown genre"
                  )
                  .join(", ")}
            </Text>
            <Text
               fontSize="18px"
               color="#828282"
               fontWeight="700"
               pt={"2px"}
               ml={"10px"}
            >
               {release_date && new Date(release_date).getFullYear()}
            </Text>
         </div>
      </div>
   );
};
