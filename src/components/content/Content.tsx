import React from "react";

import { Card } from "components/common/Card/Card";

import styles from "./index.module.scss";

export const Content = () => {
   return (
      <div className={"container"}>
         <div className={styles.cards}>
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
