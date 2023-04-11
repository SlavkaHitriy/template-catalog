import React from "react";
import styled from "styled-components";

interface Props {
   children: React.ReactNode;
}

const StyledButton = styled.button`
   font-weight: 700;
   font-size: 24px;
   line-height: 28px;
   background: #e34564;
   border-radius: 1px;
   color: #ffffff;
   padding: 13px 54px 13px 54px;
   margin: 0 0 0 0;
   cursor: pointer;

   @media (max-width: 500px) {
      font-size: 20px;
      width: 100%;
   }
`;

export const Button = ({ children }: Props) => {
   return <StyledButton>{children}</StyledButton>;
};
