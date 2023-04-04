import React from "react";
import styles from "components/common/Card/index.module.scss";

import { Text } from "../Text";

import poster from "assets/images/1.png"

export const Card = () => {
   return (
      <div className={styles.wrapper}>
         <img src={poster} alt="poster" />
         <div className={styles.describe}>
            <Text
               fontSize="20px"
               lineHeight="23px"
               color="#3F3F3F"
               margin=""
               fontWeight="700"
            >The Dark Knight Rises </Text>
            <Text
               fontSize="20px"
               lineHeight="23px"
               color="#828282"
               margin=""
               fontWeight="700"
            >2016</Text>
         </div>
         <Text
            fontSize="16px"
            lineHeight="18px"
            color="#828282"
            margin=""
            fontWeight="400"
         >Action & Adventure</Text>
      </div>
  );
};
