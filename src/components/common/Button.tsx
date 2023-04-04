import React from "react";
import styled from "styled-components";

interface Props{
    children: React.ReactNode;
}

export const Button = ({children}: Props) => {
    const Button = styled.button`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    background: #E34564;
    border-radius: 1px;
    color: #FFFFFF;
    padding: 13px 54px 13px 54px;
    margin: 0 0 0 0;
    cursor: pointer;
    `;
 
    return <Button>{children}</Button>;
 };
  