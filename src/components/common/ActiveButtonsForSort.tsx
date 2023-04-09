import React from "react";
import styled from "styled-components";

interface ActiveButtonsForSortProps {
   children: React.ReactNode;
   onClick: () => void;
   active: boolean;
}

const StyledActiveButtonsForSort = styled.button<ActiveButtonsForSortProps>`
   font-weight: 700;
   font-size: 24px;
   line-height: 28px;
   color: ${({ active }) => (active ? "#E34564" : "#828282")};
   padding: 25px 0 25px 0;
   background-color: unset;
   border-bottom: ${({ active }) => (active ? "4px solid #E34564" : "none")};
   margin: 0 0 0 40px;
   cursor: pointer;
`;

export const ActiveButtonsForSort = ({
   children,
   active,
   onClick,
}: ActiveButtonsForSortProps) => {
   return (
      <StyledActiveButtonsForSort onClick={onClick} active={active}>
         {children}
      </StyledActiveButtonsForSort>
   );
};
