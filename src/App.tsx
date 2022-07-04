import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Text/Title/Title";
import TileBoard from "./components/Board/TileBoard/TileBoard";
import KeyBoard from "./components/Board/KeyBoard/KeyBoard";
import styled from "styled-components";


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
    return (
        <div className="app">
            <Navbar>
                <Title>
                    Wordle
                </Title>
            </Navbar>
            <S.GameContainer>
                <TileBoard/>
                <KeyBoard/>
            </S.GameContainer>
        </div>
    );
}

export default App;
