import React from "react";
import styled from "styled-components";

interface Props {
   children: React.ReactNode;
   onClick: () => void;
   active: boolean;
}

export const ActiveButton = ({ children, active, onClick }: Props) => {
   const StyledButton = styled.button`
      font-family: "Arial", sans-serif;
      font-style: normal;
      font-weight: ${active ? 400 : 700};
      font-size: 20px;
      line-height: 23px;
      background: ${active ? "#5C5C5C" : "#E34564"};
      border-radius: 1px;
      color: ${active ? "#E0E0E0" : "#FFFFFF"};
      padding: 5px 32px 5px 32px;
      margin: 0 16px 0 0;
      cursor: pointer;
   `;

   return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
