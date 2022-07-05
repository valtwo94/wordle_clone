import styled from "styled-components";
import React from "react";
import {observer} from "mobx-react";

interface MKeyButtonProps {
    keyData?: string
    icon?: JSX.Element
    onClick?: () => void
}

const defaultMKeyButtonProps: MKeyButtonProps = {
    keyData: '',
    icon: <div/>,
    onClick: () => {}

}

const S = {
    MKeyButton: styled.div`
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
      background-color: var(--key-bg);
      color: var(--key-text-color);
      flex: 1.5;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
    `
}


const MKeyButton:React.FC<MKeyButtonProps> = (props) => {
    return (
        <S.MKeyButton onClick={props.onClick}>
            {props.keyData}
            {props.icon}
        </S.MKeyButton>
    )
}

MKeyButton.defaultProps = defaultMKeyButtonProps


export default observer(MKeyButton)
