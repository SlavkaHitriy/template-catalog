import React, { useState } from "react";

import { ActiveButtonsForSort } from "components/common/ActiveButtonsForSort";

import { Text } from "../common/Text";

import styles from "./index.module.scss";

export const SortBlock = () => {
   const [activeSort, setActiveSort] = useState<string>("date");

   const handleClick = (sort: string) => {
      setActiveSort(sort);
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <Text fontSize="20px" color="#828282" fontWeight="700">
               7 movies found
            </Text>
            <div className={styles.sortBy}>
               <Text fontSize="24px" color="#828282" fontWeight="400">
                  Sort by
               </Text>
               <ActiveButtonsForSort
                  onClick={() => handleClick("date")}
                  active={activeSort === "date"}
               >
                  Release Date
               </ActiveButtonsForSort>
               <ActiveButtonsForSort
                  onClick={() => handleClick("rate")}
                  active={activeSort === "rate"}
               >
                  Rating
               </ActiveButtonsForSort>
            </div>
         </div>
      </div>
   );
};
