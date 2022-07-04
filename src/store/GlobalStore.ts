import {makeAutoObservable} from "mobx";
import Words from '../constants/words.json'


class GlobalStore {
    constructor() {
        makeAutoObservable(this)
        this.fetchWordData()
    }

    helpModalIsOpen: boolean = false;
    playingStatus: "Playing" | "Finished" = "Playing"
    currentIndex: number = 0;
    finishedRowIndex: number = 0;
    answer: string[]  = ["", "", "", "", ""]
    tileBoard: any[] = Array(30) ;

    fetchWordData (){
        const dataLength = Words.length;
        const randomNum = Math.floor(Math.random() * dataLength);
        const word: string = Words[randomNum];
        this.answer = word.split("")
        console.log(this.answer)
        console.log(this.tileBoard)
    }

    reset() {
        this.tileBoard = Array(30);
    }

    pressLetterKey (key: string) {
        if(this.currentIndex>=0 && this.currentIndex <5 && this.finishedRowIndex == 0){
            this.tileBoard[this.currentIndex] = key
            this.currentIndex ++
            console.log(this.currentIndex)

        }
    }

     pressBackSpaceKey (){
        const i = this.finishedRowIndex;
        if(this.currentIndex>5*i && this.currentIndex <=5*(i+1) && this.finishedRowIndex == 0){
            this.tileBoard[this.currentIndex -1] = undefined
            this.currentIndex--
            console.log(this.currentIndex)
        }

    }

    checkWordAvailable() {

    }

    toggleHelpButton = () => this.helpModalIsOpen = !this.helpModalIsOpen


}

export default GlobalStore