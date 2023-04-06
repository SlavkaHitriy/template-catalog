import React from "react";

import { Header } from "components/Home/Search/Header";
import { Footer } from "components/common/Footer/Footer";
import { Content } from "components/content/Content";
import { SortBlock } from "components/settingsSort/SortBlock";
import styles from "modules/Home/index.module.scss";

export const Home = () => {
   return (
      <div>
         <div className={styles.wrapper}>
            <Header />
            <SortBlock />
            <Content />
            <Footer />
         </div>
      </div>
   );
};
