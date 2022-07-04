import {makeAutoObservable} from "mobx";
import Words from '../constants/words.json'
import {Color} from "../model/Color";
import {PlayingStatus} from "../model/PlayingStatus";


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
    answerBoard: any[] = Array(30);
    tileBoard: any[] = Array(30) ;
    toastIsOpen: boolean = false;
    toastMessage: string = ""

    fetchWordData (){
        const dataLength = Words.length;
        const randomNum = Math.floor(Math.random() * dataLength);
        this.answer = Words[randomNum];
        console.log(this.answer)
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
                console.log(array);
                array.map((v, i) => {
                    if(this.tileBoard[5*this.finishedRowIndex + i] === this.answer[i]) {
                        correct ++;
                        this.answerBoard[5*this.finishedRowIndex + i] =  Color.green
                    }else if( this.answer.includes(this.tileBoard[i]) ){
                        this.answerBoard[5*this.finishedRowIndex + i] =  Color.yellow
                    }else{
                        this.answerBoard[5*this.finishedRowIndex + i] = Color.gray
                    }
                })
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

        }

    }

    toggleHelpButton = () => this.helpModalIsOpen = !this.helpModalIsOpen


}

export default GlobalStore