import styled from "styled-components";
import React from "react";

interface NavButtonProps {
    children: JSX.Element
    onClick: () => void
}

const S = {
    NavButton: styled.div`
      padding-top: 2px;
      padding-right: 5px;
    `
}


const NavButton:React.FC<NavButtonProps> = ({children, onClick}) => {
    return (
        <S.NavButton onClick={onClick}>
            {children}
        </S.NavButton>
    )
}

export default NavButton
