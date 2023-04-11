import React from "react";
import styled from "styled-components";

interface TextProps {
   fontSize?: string;
   lineHeight?: string;
   color?: string;
   fontWeight?: string | number;
   m?: string;
   mt?: string;
   mr?: string;
   mb?: string;
   ml?: string;
   p?: string;
   pt?: string;
   pr?: string;
   pb?: string;
   pl?: string;
   children: React.ReactNode;
   className?: string;
}

const StyledText = styled.div<TextProps>`
   ${(props) => `
      display: inline-block;
      font-weight: ${props.fontWeight};
      font-size: ${props.fontSize};
      line-height: ${props.lineHeight};
      color: ${props.color};
      margin: ${props.m};
      margin-top: ${props.mt};
      margin-right: ${props.mr};
      margin-bottom: ${props.mb};
      margin-left: ${props.ml};
      padding: ${props.p};
      padding-top: ${props.pt};
      padding-right: ${props.pr};
      padding-bottom: ${props.pb};
      padding-left: ${props.pl};
   `}
`;

export const Text = ({ children, className, ...props }: TextProps) => {
   return (
      <StyledText className={className} {...props}>
         {children}
      </StyledText>
   );
};
