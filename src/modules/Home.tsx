import React from "react";

import { Search } from "components/Search/Search";
import { Content } from "components/content/Content";
import { SortBlock } from "components/settingsSort/SortBlock";

export const Home = () => {
   return (
      <>
         <Search />
         <SortBlock />
         <Content />
      </>
   );
};
