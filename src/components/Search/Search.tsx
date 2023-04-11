import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router";

import background from "assets/images/bg.png";

import { Button } from "components/common/Button";
import { Text } from "components/common/Text";

import { SearchResultsURLPath } from "../../core/helpers/routes";

import styles from "./index.module.scss";

export const Search = () => {
   const navigate = useNavigate();
   const [searchValue, setSearchValue] = useState<string>("");

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchValue) {
         navigate(SearchResultsURLPath.getUrl(searchValue));
      }
   };

   return (
      <div className={styles.wrapper}>
         <img src={background} alt="background" />
         <form className="container" onSubmit={handleSubmit}>
            <Text
               className={styles.searchTitle}
               color="#FFF"
               mb="32px"
               fontWeight="700"
            >
               Find your movie
            </Text>
            <div className={styles.searchContainer}>
               <input
                  className={styles.searchInput}
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
               />
               <button type={"submit"} className={styles.searchIcon} />
            </div>
            <div className={styles.settingsSearch}>
               <Button>Search</Button>
            </div>
         </form>
      </div>
   );
};
