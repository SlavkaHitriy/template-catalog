import React, { FC } from "react";

import { Text } from "components/common/Text";

import { MovieDetails } from "../../core/api/dto/movies";
import { Image } from "../common/Image";

import styles from "./index.module.scss";

interface InfoBlockProps extends MovieDetails {}

export const InfoBlock: FC<InfoBlockProps> = ({
   backdrop_path,
   poster_path,
   title,
   genres,
   release_date,
   runtime,
   overview,
}) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.movieBG}>
            <Image
               filePath={backdrop_path}
               alt={"background"}
               className={styles.background}
            />
         </div>
         <div className="container">
            <div className={styles.generalInfo}>
               <Image filePath={poster_path} alt={"poster"} />
               <div className={styles.infoText}>
                  <div>
                     <Text className={styles.infoTitle} color="#fff">
                        {title}
                     </Text>
                  </div>
                  <Text
                     className={styles.infoGenres}
                     color="#E0E0E0"
                     mt={"8px"}
                     mb="16px"
                  >
                     {genres.map((genre) => genre.name).join(", ")}
                  </Text>
                  <div className={styles.infoYearTime}>
                     <Text
                        fontSize="24px"
                        lineHeight="28px"
                        color="#ffffff"
                        mr="41px"
                     >
                        {new Date(release_date).getFullYear()}
                     </Text>
                     <Text
                        fontSize="24px"
                        lineHeight="28px"
                        color="#ffffff"
                        m="0"
                     >
                        {runtime} min
                     </Text>
                  </div>
                  <Text
                     className={styles.infoOverview}
                     lineHeight="150%"
                     color="#E0E0E0"
                  >
                     {overview}
                  </Text>
               </div>
            </div>
         </div>
      </div>
   );
};
