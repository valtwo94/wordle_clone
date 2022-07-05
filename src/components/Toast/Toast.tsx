import React, {useEffect} from 'react'
import styled from "styled-components";

interface ToastProps {
    message: string
    toastIsOpen: boolean
}

const S = {
    Toast: styled.div`
      position: fixed;
      margin: 70px auto;
      left: 0;
      right: 0;
      align-items: center;
      width: 120px;
      height: 50px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: bold;
      color: white;
      background-color: var(--color-absent);
      animation: fadeout 2s;
      -moz-animation: fadeout 2s; /* Firefox */
      -webkit-animation: fadeout 2s; /* Safari and Chrome */
      -o-animation: fadeout 2s; /* Opera */
      animation-fill-mode: forwards;
      z-index: 900;
    `,
    Message: styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 901;
    `
}

const Toast: React.FC<ToastProps> = ({message, toastIsOpen}) => {

    return (
        toastIsOpen ? <S.Toast>
            <S.Message>
                {message}
            </S.Message>
        </S.Toast> : <div/>
    )
}

export default Toast