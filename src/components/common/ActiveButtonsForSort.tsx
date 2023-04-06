import React from "react";
import styled from "styled-components";

interface Props {
   children: React.ReactNode;
   onClick: () => void;
   active: boolean;
}

export const ActiveButtonsForSort = ({ children, active, onClick }: Props) => {
   const StyledActiveButtonsForSort = styled.button`
      font-family: "Arial";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: ${active ? "#E34564" : "#828282"};
      padding: 25px 0px 25px 0px;
      border: none;
      background-color: none;
      border-bottom: ${active ? "4px solid #E34564" : "none"};
      margin: 0 0 0 40px;
      cursor: pointer;
   `;

   return (
      <StyledActiveButtonsForSort onClick={onClick}>
         {children}
      </StyledActiveButtonsForSort>
   );
};
