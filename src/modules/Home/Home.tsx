import React from "react";

import { Content } from "components/content/Content";
import { SortBlock } from "components/settingsSort/SortBlock";
import { Search } from "components/Search/Search";
import {InfoBlock} from "components/InfoBlock/InfoBlock"

import ErrorBounder from "../../ErrorBounder"

import styles from "modules/Home/index.module.scss";

export const Home = () => {
   return (
      <div>
         <div className={styles.wrapper}>
            <ErrorBounder>
            <InfoBlock/>
            <SortBlock />
            <Content />
            </ErrorBounder>
         </div>
      </div>
   );
};
