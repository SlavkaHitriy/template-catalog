import React from "react";

import { Card } from "components/common/Card/Card";
import styles from "components/content/index.module.scss";

export const Content = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </div>
   );
};
