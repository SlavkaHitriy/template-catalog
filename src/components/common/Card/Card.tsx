import React from "react";

import poster from "assets/images/1.png";

import { Text } from "../Text";

import styles from "./index.module.scss";

export const Card = () => {
   return (
      <div className={styles.wrapper}>
         <img src={poster} alt="poster" />
         <div className={styles.describe}>
            <Text fontSize="20px" color="#3F3F3F" fontWeight="700">
               The Dark Knight Rises{" "}
            </Text>
            <Text fontSize="20px" color="#828282" fontWeight="700">
               2016
            </Text>
         </div>
         <Text fontSize="16px" color="#828282" fontWeight="400">
            Action & Adventure
         </Text>
      </div>
   );
};
