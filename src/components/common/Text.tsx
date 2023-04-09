import React from "react";
import styled from "styled-components";

interface TextProps {
   fontSize?: string;
   lineHeight?: string;
   color?: string;
   margin?: string;
   fontWeight?: string;
   children: React.ReactNode;
}

const StyledText = styled.p<TextProps>`
   ${({ fontWeight, fontSize, lineHeight, color, margin }) => `
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${color};
      margin: ${margin};
   `}
`;

export const Text = ({ children, ...props }: TextProps) => {
   return <StyledText {...props}>{children}</StyledText>;
};
