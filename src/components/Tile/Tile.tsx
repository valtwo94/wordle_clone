import styled from "styled-components";
import React, {useEffect} from "react";
import {observer} from "mobx-react";

interface TileButtonProps {
    keyData: string;
}

const S = {
    Tile: styled.div`
      width: 100%;
      border: 2px solid var(--color-tone-4);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: var(--tile-text-color);
      text-transform: uppercase;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `,
    ActiveTile: styled.div`
      width: 100%;
      border: 2px solid var(--color-tone-2);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: black;
      text-transform: uppercase;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `
}


const Tile: React.FC<TileButtonProps> = ({keyData}) => {


    return (
        keyData == null ?
            <S.Tile>{keyData}</S.Tile> : <S.ActiveTile>{keyData}</S.ActiveTile>

    )
}

export default observer(Tile)
