import styled from "styled-components";
import React, {useContext} from "react";
import NavButton from "../Buttons/NavButton/NavButton";
import MenuIcon from "../Icons/MenuIcon";
import HelpIcon from "../Icons/HelpIcon";
import GraphIcon from "../Icons/GraphIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import {observer} from "mobx-react";
import {StoreContext} from "../../store/store.context";

interface NavbarProps  {
    children: JSX.Element
}

const S = {
    Navbar: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 0 16px;
      height: var(--header-height);
      color: var(--color-tone-1);
      border-bottom: 1px solid var(--color-tone-4);
    `,
    MenuLeft: styled.div`
      display: flex;
      margin: 0;
      padding: 0;
      align-items: center;
      width: 70px;
      justify-content: flex-start;
    `,
    MenuRight: styled.div`
      display: flex;
      width: 70px;
      justify-content: flex-end;
    `
}


const NavBar:React.FC<NavbarProps> = ({children}) => {
    const {globalStore} = useContext(StoreContext);

    return (
        <S.Navbar>
            <S.MenuLeft>
                <NavButton onClick={() => {}}>
                    <MenuIcon/>
                </NavButton>
                <NavButton onClick={globalStore.toggleHelpButton}>
                    <HelpIcon/>
                </NavButton>
            </S.MenuLeft>
            {children}
            <S.MenuRight>
                <NavButton onClick={() => {}}>
                    <GraphIcon/>
                </NavButton>
                <NavButton onClick={() => {}}>
                    <SettingsIcon/>
                </NavButton>
            </S.MenuRight>
        </S.Navbar>
    )
}

export default observer(NavBar)
