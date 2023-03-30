import React from "react";

import { Card } from "components/common/Card";
import styles from "modules/Home/index.module.scss";

export const Home = () => {
   return (
      <div>
         <div className={styles.wrapper}>
            <Card />
         </div>
      </div>
   );
};
