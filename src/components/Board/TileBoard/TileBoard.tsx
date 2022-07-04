import styled from "styled-components";
import React, {useContext} from "react";
import Tile from "../../Tile/Tile";
import {StoreContext} from "../../../store/store.context";
import {observer} from "mobx-react";


const S = {
    BoardContainer: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      overflow: hidden;
      
    `,
    TileBoard: styled.div`
      width: 350px;
      height: 420px;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    `
}


const TileBoard: React.FC = () => {
    const {globalStore} = useContext(StoreContext)



    return (
        <S.BoardContainer>
            <S.TileBoard>
                {globalStore.tileBoard.map((item, i) => {
                    return <Tile key={i} keyData={item} color={globalStore.answerBoard[i]}/>
                })}
            </S.TileBoard>
        </S.BoardContainer>
    )
}

export default observer(TileBoard)
