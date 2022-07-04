import styled from "styled-components";
import React from "react";

interface TitleProps {
 children: string
}

const S = {
    Title: styled.div`
      font-weight: 700;
      font-size: 37px;
      line-height: 100%;
      letter-spacing: 0.01em;
      text-align: center;
      left: 0;
      right: 0;
      pointer-events: none;
      position: relative;
    `
}


const Title:React.FC<TitleProps> = ({children}) => {
    return (
        <S.Title>
            {children}
        </S.Title>
    )
}

export default Title
