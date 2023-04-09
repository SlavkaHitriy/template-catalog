import React from "react";

import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { Text } from "../../components/common/Text";
import { Content } from "../../components/content/Content";

import styles from "./index.module.scss";

export const SearchResults = () => {
   return (
      <>
         <InfoBlock />
         <div className={styles.wrapper}>
            <div className={"container"}>
               <div className={styles.searchInfo}>
                  <Text fontSize="20px" color="#828282" margin="0px 16px 0 0">
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
