import React from "react";

import { Header } from "components/common/Header/Header";
import { Footer } from "components/common/Footer/Footer";
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
            <Header />
            <InfoBlock/>
            <SortBlock />
            <Content />
            <Footer />
            </ErrorBounder>
         </div>
      </div>
   );
};
