import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
   padding: 50px 0;
   text-align: center;
   font-size: 36px;
   color: ${({ theme }) => theme.colors.secondary};
   font-weight: 700;
`;

export const Loader = () => {
   return <StyledLoader>Loading...</StyledLoader>;
};
