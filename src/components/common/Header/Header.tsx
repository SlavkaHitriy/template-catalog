import React from "react";



import styles from "components/common/Header/index.module.scss";
import { Text } from "components/common/Text";



export const Header = () => {
return (
        <div className={"container"}>
            <div className={styles.wrapper}>
                <Text
                    fontSize="32px"
                    lineHeight="37px"
                    color="#E34564"
                    margin="32px 0 73px 0"
                    fontWeight="700"
                >
                    netflixroulette
                </Text>
            </div>
        </div>
    );
};