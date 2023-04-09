import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={"container"}>
            <Link className={styles.headerLink} to={"/"}>
               netflixroulette
            </Link>
         </div>
      </header>
   );
};
