import React from "react";

import styles from "components/Footer/index.module.scss";

import { Text } from "../common/Text";

export const Footer = () => {
   return (
      <div className={styles.wrapper}>
         <div className="container">
            <Text fontSize="24px" color="#E34564" fontWeight="700">
               netflixroulette
            </Text>
         </div>
      </div>
   );
};
