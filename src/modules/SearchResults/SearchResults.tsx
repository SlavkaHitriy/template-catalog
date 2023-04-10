import React from "react";

import { Content } from "../../components/Content/Content";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { Text } from "../../components/common/Text";

import styles from "./index.module.scss";

export const SearchResults = () => {
   return (
      <>
         <InfoBlock />
         <div className={styles.wrapper}>
            <div className={"container"}>
               <div className={styles.searchInfo}>
                  <Text fontSize="20px" color="#828282" mr="16px">
                     More films by
                  </Text>
                  <Text fontSize="20px" color="#828282" fontWeight={"700"}>
                     Action & Adventure genre
                  </Text>
               </div>
            </div>
         </div>
         <Content />
      </>
   );
};
