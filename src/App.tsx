import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import {
   HomeURLPath,
   MovieURLPath,
   SearchResultsURLPath,
} from "core/helpers/routes";

import { Home } from "modules/Home";
import { SearchResults } from "modules/SearchResults/SearchResults";
import { NoMatch404 } from "modules/status/NoMatch404";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Movie } from "./modules/Movie/Movie";

const StyledWrapper = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

const StyledMain = styled.main`
   flex-grow: 1;
   display: flex;
   flex-direction: column;
`;

export const App = () => {
   return (
      <StyledWrapper>
         <Header />
         <StyledMain>
            <Routes>
               <Route path="*" element={<NoMatch404 />} />

               <Route path={HomeURLPath} element={<Home />} />
               <Route path={MovieURLPath.baseUrl} element={<Movie />} />
               <Route
                  path={SearchResultsURLPath.baseUrl}
                  element={<SearchResults />}
               />
            </Routes>
         </StyledMain>
         <Footer />
      </StyledWrapper>
   );
};
