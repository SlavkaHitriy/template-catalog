import React from "react";
import styled from "styled-components";

interface ActiveButtonProps {
   children: React.ReactNode;
   onClick: () => void;
   active: boolean;
}

const StyledButton = styled.button<ActiveButtonProps>`
   font-weight: ${({ active }) => (active ? 400 : 700)};
   font-size: 20px;
   background: ${({ active, theme }) =>
      active ? theme.colors.secondary : theme.colors.gray};
   border-radius: 1px;
   color: ${({ active }) => (active ? "#E0E0E0" : "#FFFFFF")};
   padding: 5px 32px 5px 32px;
   margin: 0 16px 0 0;
   cursor: pointer;
`;

export const ActiveButton = ({
   children,
   active,
   onClick,
}: ActiveButtonProps) => {
   return (
      <StyledButton onClick={onClick} active={active}>
         {children}
      </StyledButton>
   );
};
