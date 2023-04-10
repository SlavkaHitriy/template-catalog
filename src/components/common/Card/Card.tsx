import React, { FC } from "react";

import poster from "assets/images/1.png";

import { Movie } from "../../../core/api/dto/movies";
import { Text } from "../Text";

import styles from "./index.module.scss";

interface CardProps extends Movie {}

export const Card: FC<CardProps> = ({ title, release_date }) => {
   return (
      <div className={styles.wrapper}>
         <img src={poster} alt="poster" />
         <div className={styles.describe}>
            <Text fontSize="20px" color="#3F3F3F" fontWeight="700">
               {title}
            </Text>
            <Text fontSize="20px" color="#828282" fontWeight="700">
               {new Date(release_date).getFullYear()}
            </Text>
         </div>
         <Text fontSize="16px" color="#828282" fontWeight="400">
            Action & Adventure
         </Text>
      </div>
   );
};
