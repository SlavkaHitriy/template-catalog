import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeURLPath, SearchResultsURLPath } from "core/helpers/routes";

import { Home } from "modules/Home";
import { SearchResults } from "modules/SearchResults";
import { NoMatch404 } from "modules/status/NoMatch404";

export const App = () => {
   return (
      <Routes>
         <Route path="*" element={<NoMatch404 />} />

         <Route path={HomeURLPath} element={<Home />} />
         <Route path={SearchResultsURLPath} element={<SearchResults />} />
      </Routes>
   );
};
