import styled from "styled-components";
import React from "react";
import {observer} from "mobx-react";

interface SKeyButtonProps {
    keyData: string
    onClick: () => void
    color: string | undefined
}

const S = {
    SKeyButton: styled.div`
      font-family: inherit;
      font-weight: bold;
      border: 0;
      padding: 0;
      margin: 0 6px 0 0;
      height: 58px;
      border-radius: 4px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: ${props => props.color?props.color:"var(--key-bg)"} ;
      color: var(--key-text-color);
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
    `,
    SKeyText: styled.div`
      font-family: inherit;
      font-weight: bold;
      border: 0;
      padding: 0;
      margin: 0 6px 0 0;
      height: 58px;
      border-radius: 4px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: ${props => props.color?props.color:"var(--key-bg)"};
      color: ${props => props.color?"white":"var(--key-text-color)"};
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
    `
}


const SKeyButton:React.FC<SKeyButtonProps> = ({keyData, onClick, color}) => {
    return (
        <S.SKeyButton onClick={onClick} color={color}>
            <S.SKeyText color={color}>
                {keyData}
            </S.SKeyText>
        </S.SKeyButton>
    )
}

export default observer(SKeyButton)
