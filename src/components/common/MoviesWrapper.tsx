import React, { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface MoviesWrapperProps {
   children: ReactNode | ReactElement;
}

const StyledMoviesWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 60px 30px;
   padding: 80px 0;

   @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding: 40px 0;
      grid-gap: 40px 20px;
   }

   @media (max-width: 400px) {
      grid-template-columns: 1fr;
      padding: 40px 0;
      grid-gap: 40px 20px;
   }
`;

export const MoviesWrapper: FC<MoviesWrapperProps> = ({ children }) => {
   return <StyledMoviesWrapper>{children}</StyledMoviesWrapper>;
};
