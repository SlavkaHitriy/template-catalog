import React from "react";

import { Card } from "components/common/Card/Card";
import styles from "modules/Home/index.module.scss";

import { Header } from "components/Search/Header";
import { SortBlock } from "components/settingsSort/SortBlock";
import {Footer} from "components/common/Footer/Footer"
import { Content } from "components/content/Content";



export const Home = () => {
   return (
      <div>
         <div className={styles.wrapper}>
            <Header />
            <SortBlock />
            <Content/>
            <Footer/>
         </div>
      </div>
   );
};
