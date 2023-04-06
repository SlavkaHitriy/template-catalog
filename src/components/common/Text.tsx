import React from "react";
import styled from "styled-components";

interface Props {
   fontSize: string;
   lineHeight: string;
   color: string;
   margin: string;
   children: React.ReactNode;
   fontWeight?: string;
}

export const Text = ({
   fontSize,
   lineHeight,
   children,
   color,
   margin,
   fontWeight,
}: Props) => {
   const StyledText = styled.p`
      font-family: "Arial";
      font-style: normal;
      font-weight: ${fontWeight ? fontWeight : 700};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${color};
      margin: ${margin};
   `;

   return <StyledText>{children}</StyledText>;
};
