import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   flex-grow: 1;
   font-size: 48px;

   span {
      font-weight: 700;
      display: block;
      font-size: 92px;
   }
`;

export const NoMatch404 = () => {
   return (
      <StyledWrapper>
         <span>404</span> Whoops...
      </StyledWrapper>
   );
};
