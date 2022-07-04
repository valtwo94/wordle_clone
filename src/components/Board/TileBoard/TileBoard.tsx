import styled from "styled-components";
import React from "react";
import Tile from "../../Tile/Tile";


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
    return (
        <S.BoardContainer>
            <S.TileBoard>
                {[...Array(30)].map((e, i) => <Tile key={i}/>)}
            </S.TileBoard>
        </S.BoardContainer>
    )
}

export default TileBoard
