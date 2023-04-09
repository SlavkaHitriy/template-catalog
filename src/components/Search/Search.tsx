import React, { useState } from "react";

import background from "assets/images/bg.png";

import { ActiveButton } from "components/common/ActiveButton";
import { Button } from "components/common/Button";
import { Text } from "components/common/Text";

import styles from "./index.module.scss";

export const Search = () => {
   const [activeSearch, setActiveSearch] = useState<string>("title");

   const handleClick = (search: string) => {
      setActiveSearch(search);
   };

   return (
      <div className={styles.wrapper}>
         <img src={background} alt="background" />
         <div className="container">
            <Text
               fontSize="40px"
               color="#FFF"
               margin="0px 0 32px 0"
               fontWeight="700"
            >
               Find your movie
            </Text>
            <div className={styles.searchContainer}>
               <input
                  className={styles.searchInput}
                  type="text"
                  placeholder="Search..."
               />
               <span className={styles.searchIcon} />
            </div>
            <div className={styles.settingsSearch}>
               <div className={styles.buttonSearchBy}>
                  <Text
                     fontSize="24px"
                     color="#FFF"
                     margin="0px 32px 0 0"
                     fontWeight="400"
                  >
                     Search by
                  </Text>
                  <ActiveButton
                     onClick={() => handleClick("title")}
                     active={activeSearch === "title"}
                  >
                     Title
                  </ActiveButton>
                  <ActiveButton
                     onClick={() => handleClick("genre")}
                     active={activeSearch === "genre"}
                  >
                     Genre
                  </ActiveButton>
               </div>
               <Button>Search</Button>
            </div>
         </div>
      </div>
   );
};
