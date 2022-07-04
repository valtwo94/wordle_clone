import styled from "styled-components";
import React, {useContext} from "react";
import CloseIcon from "../Icons/CloseIcon";
import {observer} from "mobx-react";
import {StoreContext} from "../../store/store.context";

interface HelpModalProps {
}

const S = {
    ModalContainer : styled.div`
      position: fixed;
      top: 0;
      bottom: 0;
      color: var(--color-tone-1);
      padding: 0 32px;
      max-width: var(--game-max-width);
      width: 90%;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background);
      z-index: 99;
    `,
    ModalHeader : styled.header`
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    `,
    ModalCloseButton: styled.button`
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      position: absolute;
      right: 0px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin: 0;
    `,
    ModalContent : styled.div`
      position: relative;
      color: var(--color-tone-1);
      padding: 0 32px;
      max-width: var(--game-max-width);
      width: 100%;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
    `,
    ModalSection: styled.section`
      padding: 0 16px 16px;
    `,
    Instructions: styled.div`
      font-size: 14px;
      color: var(--color-tone-1);
    `,
    Examples: styled.div`
      border-bottom: 1px solid var(--color-tone-4);
      border-top: 1px solid var(--color-tone-4);
    `,
    TileExample: styled.div`
      margin-top: 24px;
      margin-bottom: 24px;
    `,
    TileContainer: styled.div`
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-right: 4px;
    `,
    NormalTile: styled.div`
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: var(--color-tone-1);
      text-transform: uppercase;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: var(--color-tone-7);
      border: 2px solid var(--color-tone-3);
    `,
    GreenTile: styled.div`
      background-color: var(--color-correct);
      width: 100%;
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
      border: 2px solid var(--color-correct);
    `,
    YellowTile: styled.div`
      background-color: var(--color-present);
      width: 100%;
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
      border: 2px solid var(--color-present);`,
    GreyTile: styled.div`
      background-color: var(--color-absent);
      width: 100%;
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
      border: 2px solid var(--color-absent);`
}


const HelpModal:React.FC<HelpModalProps> = ({}) => {
    const {globalStore} = useContext(StoreContext)

    return (
        <S.ModalContainer>
            <S.ModalHeader>
                <h2>How to play</h2>
                <S.ModalCloseButton onClick={globalStore.toggleHelpButton}>
                    <CloseIcon/>
                </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalContent>
                <S.ModalSection>
                    <S.Instructions>
                        <p>Guess the <strong>WORDLE</strong> in six tries</p>
                        <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
                        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                    </S.Instructions>
                    <S.Examples>
                        <p>
                            <strong>Examples</strong>
                        </p>
                        <S.TileExample>
                            <S.TileContainer>
                                <S.GreenTile>
                                    w
                                </S.GreenTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    E
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    A
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    R
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    Y
                                </S.NormalTile>
                            </S.TileContainer>
                            <p>
                                The letter <strong>W</strong> is in the word and in the correct spot.
                            </p>
                        </S.TileExample>
                        <S.TileExample>
                            <S.TileContainer>
                                <S.NormalTile>
                                    p
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.YellowTile>
                                    I
                                </S.YellowTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    L
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    L
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    S
                                </S.NormalTile>
                            </S.TileContainer>
                            <p>
                                The letter <strong>I</strong> is in the word but in the wrong spot.
                            </p>
                        </S.TileExample>
                        <S.TileExample>
                            <S.TileContainer>
                                <S.NormalTile>
                                    V
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    A
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    G
                                </S.NormalTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.GreyTile>
                                    U
                                </S.GreyTile>
                            </S.TileContainer>
                            <S.TileContainer>
                                <S.NormalTile>
                                    E
                                </S.NormalTile>
                            </S.TileContainer>
                            <p>
                                The letter <strong>U</strong> is not in the word but in any spot.
                            </p>
                        </S.TileExample>
                    </S.Examples>
                    <p>
                        <strong>A new WORDLE will be available each day!</strong>
                    </p>
                </S.ModalSection>
            </S.ModalContent>

        </S.ModalContainer>
    )
}

export default observer(HelpModal)
