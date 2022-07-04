import styled from "styled-components";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {Color} from "../../model/Color";

interface TileButtonProps {
    keyData: string;
    color: Color
}



const S = {
    EmptyTile: styled.div`
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
      border: 2px solid ${props => props.color || "var(--color-tone-2)"};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: bold;
      background-color: ${props => props.color || 'white'};
      vertical-align: middle;
      box-sizing: border-box;
      color: ${props => props.color? "white": "black" };
      text-transform: uppercase;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `
}


const Tile: React.FC<TileButtonProps> = ({keyData, color}) => {

    return (
        keyData == null ?
            <S.EmptyTile>{keyData}</S.EmptyTile> : <S.ActiveTile color={color}>{keyData}</S.ActiveTile>

    )
}

export default observer(Tile)
