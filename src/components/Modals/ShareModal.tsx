import React, {useContext} from "react";
import styled from "styled-components";
import ShareIcon from "../Icons/ShareIcon";
import {StoreContext} from "../../store/store.context";
import CloseIcon from "../Icons/CloseIcon";
import {observer} from "mobx-react";


const S = {
    ModalContainer: styled.div`
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      background-color: var(--opacity-50);
      z-index: var(--modal-z-index);
    `,
    ModalContent: styled.div`
      position: relative;
      border-radius: 8px;
      border: 1px solid var(--color-tone-6);
      background-color: var(--modal-content-bg);
      color: var(--color-tone-1);
      box-shadow: 0 4px 23px 0 rgb(0 0 0 / 20%);
      width: 90%;
      max-height: 90%;
      overflow-y: auto;
      -webkit-animation: Modal-module_SlideIn__g77Ik 200ms;
      animation: Modal-module_SlideIn__g77Ik 200ms;
      max-width: var(--game-max-width);
      padding: 16px;
      box-sizing: border-box;
    `,
    ModalButtonContainer: styled.div`
      width: 100%;
      height: 100%;
      min-height: 120px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    `,
    ModalButton: styled.button`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 200px;
      height: 60px;
      border-radius: 12px;
      background-color: #6aaa64;
      font-weight: bold;
      font-size: 24px;
      color: white;
      cursor: pointer;
    `,
    ModalCloseButton: styled.div`
      position: absolute;
      top: 10px;
      right: 10px;
    `

}

const ShareModal: React.FC = () => {
    const {globalStore} = useContext(StoreContext);


    return (
        <S.ModalContainer>
            <S.ModalContent>
                <S.ModalCloseButton onClick={globalStore.closeShareModal}>
                    <CloseIcon/>
                </S.ModalCloseButton>
                <S.ModalButtonContainer>
                    <S.ModalButton onClick={globalStore.closeShareModal}>
                        다시하기
                    </S.ModalButton>
                        <S.ModalButton onClick={globalStore.share}>
                            <ShareIcon/>
                            공유하기
                        </S.ModalButton>
                </S.ModalButtonContainer>
            </S.ModalContent>
        </S.ModalContainer>
    )
}

export default observer(ShareModal)

