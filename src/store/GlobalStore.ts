import {makeAutoObservable} from "mobx";
import Words from '../constants/words.json'
import {Color} from "../model/Color";
import {PlayingStatus} from "../model/PlayingStatus";
import {KeyBoard} from "../constants/keys";


class GlobalStore {
    constructor() {
        makeAutoObservable(this)
        this.fetchWordData()
    }

    helpModalIsOpen: boolean = false;
    shareModalIsOpen: boolean = false;
    playingStatus: PlayingStatus = PlayingStatus.playing
    currentIndex: number = 0;
    finishedRowIndex: number = 0;
    answer: string = "";
    userAnswer: string = "";
    keyBoard: {[key: string]: string}  = KeyBoard
    colorBoard: any[] = Array(30);
    tileBoard: any[] = Array(30) ;
    toastIsOpen: boolean = false;
    toastMessage: string = ""

    fetchWordData (){
        const dataLength = Words.length;
        const randomNum = Math.floor(Math.random() * dataLength);
        this.answer = Words[randomNum];
        console.log(this.answer)
        console.log(this.keyBoard)
    }

    initializeKeyBoard (){

    }

    reset() {
        this.tileBoard = Array(30);
    }

    pressLetterKey (key: string) {
        if(this.currentIndex< this.finishedRowIndex * 5 + 5 && this.finishedRowIndex !== 6){
            this.tileBoard[this.currentIndex] = key
            this.userAnswer = this.userAnswer.concat(this.tileBoard[this.currentIndex])
            console.log(this.userAnswer)
            if(this.currentIndex < 29)this.currentIndex ++
        }
    }

     pressBackSpaceKey (){
        if(this.currentIndex>0  && this.currentIndex > this.finishedRowIndex * 5  && this.currentIndex <= this.finishedRowIndex * 5 + 5 && this.finishedRowIndex !==6){
            this.tileBoard[this.currentIndex -1] = undefined
            this.userAnswer = this.userAnswer.slice(0, -1)
            this.currentIndex--
            console.log(this.userAnswer)
        }

    }

    pressEnterKey (){
       this.checkAnswer();
    }

    checkAnswer() {
        let correct = 0;
        if(Words.includes(this.userAnswer) && this.finishedRowIndex !== 6){
            if(this.currentIndex < 30 ){
                let array = this.tileBoard.slice(this.finishedRowIndex * 5, this.finishedRowIndex*5 + 5);
                array.map((v, i) => {
                    if(this.tileBoard[5*this.finishedRowIndex + i] === this.answer[i]) {
                        correct ++;
                        this.colorBoard[5*this.finishedRowIndex + i] =  Color.green
                        Object.keys(this.keyBoard).forEach((key) => {
                            if(key === this.userAnswer[i].toUpperCase()){
                                this.keyBoard[key] = Color.green;
                            }

                        })
                    }else if( this.answer.includes(this.tileBoard[i]) ){
                        this.colorBoard[5*this.finishedRowIndex + i] =  Color.yellow
                        Object.keys(this.keyBoard).forEach((key) => {
                            if(this.keyBoard[key] !== Color.green && key === this.userAnswer[i].toUpperCase()){
                                this.keyBoard[key] = Color.yellow;
                            }
                        })
                    }else{
                        this.colorBoard[5*this.finishedRowIndex + i] = Color.gray
                        Object.keys(this.keyBoard).forEach((key) => {
                            if(this.keyBoard[key] !== Color.green && this.keyBoard[key] !== Color.yellow && key === this.userAnswer[i].toUpperCase()){
                                this.keyBoard[key] = Color.gray;
                            }
                        })
                    }
                })
                console.log(this.keyBoard)
            }
            if(this.finishedRowIndex  < 6 ) {
                this.finishedRowIndex++
                this.userAnswer = "";
            }
            this.toastMessage = ""
            this.toastIsOpen = false
            console.log(this.tileBoard)
        }else{
            this.toastMessage = "Not In Word List"
            this.toastIsOpen = true
            setTimeout(()  =>  {
                this.toastIsOpen = false
            }, 2000)

        }

        if(correct === 5){
            this.finishedRowIndex = 6;
            this.shareModalIsOpen = true;
        }

    }



    toggleHelpButton = () => this.helpModalIsOpen = !this.helpModalIsOpen


}

export default GlobalStore