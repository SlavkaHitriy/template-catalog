import React, { useState, ChangeEvent } from "react";
import styles from "components/settingsSort/index.module.scss";

import { Text } from "../common/Text";
import { ActiveButtonsForSort } from "components/common/ActiveButtonsForSort";




export const SortBlock = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () =>{
        setIsActive(!isActive);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Text
                    fontSize="20px"
                    lineHeight="23px"
                    color="#828282"
                    margin="0px 0 0px 0"
                    fontWeight="700"
                >7 movies found</Text>
                <div className={styles.sortBy}>
                    <Text
                        fontSize="24px"
                        lineHeight="28px"
                        color="#828282"
                        margin="0px 0 0px 0"
                        fontWeight="400"
                    >Sort by</Text>
                    <ActiveButtonsForSort
                        onClick={handleClick} 
                        active={isActive}
                    >Release Date</ActiveButtonsForSort>
                    <ActiveButtonsForSort
                        onClick={handleClick} 
                        active={!isActive}
                    >Rating</ActiveButtonsForSort>
                </div>
            </div>
        </div>
    );
};
