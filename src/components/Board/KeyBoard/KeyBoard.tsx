import styled from "styled-components";
import React, {useContext, useEffect} from "react";
import {KeyRow1, KeyRow2, KeyRow3} from "../../../constants/keys";
import SKeyButton from "../../Buttons/SKeyButton/SKeyButton";
import MKeyButton from "../../Buttons/MKeyButton/MKeyButton";
import BackSpaceIcon from "../../Icons/BackSpaceIcon";
import {StoreContext} from "../../../store/store.context";
import {observer} from "mobx-react";


const S = {
    KeyBoard: styled.div`
      display: block;
      height: var(--keyboard-height);
      margin: 0 8px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `,
    KeyHalf: styled.div`
      flex: 0.5;
    `,
    KeyRow: styled.div`
      display: flex;
      width: 100%;
      margin: 0 auto 8px;
      touch-action: manipulation;
    `
}



const KeyBoard: React.FC = () => {
    const {globalStore} = useContext(StoreContext)

    return (
        <S.KeyBoard>
            <S.KeyRow>
                {KeyRow1.map((v, i) => <SKeyButton key={i} keyData={v} onClick={() => globalStore.pressLetterKey(v)} color={globalStore.keyBoard[v]} />)}
            </S.KeyRow>
            <S.KeyRow>
                <S.KeyHalf/>
                {KeyRow2.map((v, i) => <SKeyButton key={i} keyData={v} onClick={()=> globalStore.pressLetterKey(v)} color={globalStore.keyBoard[v]}/>)}
                <S.KeyHalf/>
            </S.KeyRow>
            <S.KeyRow>
                <MKeyButton keyData={"Enter"} onClick={() => globalStore.pressEnterKey()}/>
                {KeyRow3.map((v, i) => <SKeyButton key={i} keyData={v} onClick={()=> globalStore.pressLetterKey(v)} color={globalStore.keyBoard[v]}/>)}
                <MKeyButton icon={<BackSpaceIcon/>}  onClick={() => globalStore.pressBackSpaceKey()}/>
            </S.KeyRow>
        </S.KeyBoard>
    )
}

export default observer(KeyBoard)
