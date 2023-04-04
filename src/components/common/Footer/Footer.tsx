import React, { useState, ChangeEvent } from "react";
import styles from "components/common/Footer/index.module.scss";

import { Text } from "../Text";


export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
               <Text
                  fontSize="24px"
                  lineHeight="28px"
                  color="#E34564"
                  margin="24px 0 24px 0"
                  fontWeight="700"  
               >netflixroulette</Text>
            </div>
        </div>
    );
};
