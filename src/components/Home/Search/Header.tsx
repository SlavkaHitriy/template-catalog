import React, { useState } from "react";

import background from "assets/images/Background.png";

import styles from "components/Home/Search/index.module.scss";
import { ActiveButton } from "components/common/ActiveButton";
import { Button } from "components/common/Button";
import { Text } from "components/common/Text";

export const Header = () => {
   const [isActive, setIsActive] = useState<boolean>(false);

   const handleClick = () => {
      setIsActive(!isActive);
   };

   return (
      <div className={styles.wrapper}>
         <img src={background} alt="background" />
         <div className={styles.container}>
            <Text
               fontSize="32px"
               lineHeight="37px"
               color="#E34564"
               margin="32px 0 73px 0"
               fontWeight="700"
            >
               netflixroulette
            </Text>

            <Text
               fontSize="40px"
               lineHeight="46px"
               color="#FFFFFF"
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
                     lineHeight="28px"
                     color="#FFFFFF"
                     margin="0px 32px 0 0"
                     fontWeight="400"
                  >
                     Search by
                  </Text>
                  <ActiveButton onClick={handleClick} active={isActive}>
                     Title
                  </ActiveButton>
                  <ActiveButton onClick={handleClick} active={!isActive}>
                     Genre
                  </ActiveButton>
               </div>
               <Button>Search</Button>
            </div>
         </div>
      </div>
   );
};
