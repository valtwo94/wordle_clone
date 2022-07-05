import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Text/Title/Title";
import TileBoard from "./components/Board/TileBoard/TileBoard";
import KeyBoard from "./components/Board/KeyBoard/KeyBoard";
import styled from "styled-components";
import {observer} from "mobx-react";
import {StoreContext} from "./store/store.context";
import HelpModal from "./components/Modals/HelpModal";
import Toast from "./components/Toast/Toast";
import ShareModal from "./components/Modals/ShareModal";


const S = {
    GameContainer: styled.div`
      width: 100%;
      height: calc(100% - var(--header-height));
      max-width: var(--game-max-width);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    `
}



const App = () => {
    const {globalStore} = useContext(StoreContext)
    console.log(globalStore.helpModalIsOpen)

    // onKeyDown handler function
    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.keyCode >= 65 && event.keyCode <= 90){
           globalStore.pressLetterKey(event.key)
        }
        if(event.key === "Backspace"){
            globalStore.pressBackSpaceKey();
        }
        if(event.key === "Enter"){
            globalStore.pressEnterKey()
        }
    };

    return (
        <div className="app" onKeyDown={keyDownHandler} tabIndex={0}>
            <Toast message={globalStore.toastMessage} toastIsOpen={globalStore.toastIsOpen}/>
            <Navbar>
                <Title>
                    Wordle
                </Title>
            </Navbar>
            <S.GameContainer>
                {globalStore.helpModalIsOpen?<HelpModal/>:<div/>}
                {globalStore.shareModalIsOpen?<ShareModal/>:<div/>}
                <TileBoard/>
                <KeyBoard/>
            </S.GameContainer>

        </div>
    );
}

export default observer(App);
