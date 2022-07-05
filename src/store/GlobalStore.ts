import {makeAutoObservable} from "mobx";
import Words from '../constants/words.json'
import {Color} from "../model/Color";
import {KeyBoard} from "../constants/keys";
import 'moment/locale/ko';


class GlobalStore {
    constructor() {
        makeAutoObservable(this)
        this.fetchWordData()
    }

    helpModalIsOpen: boolean = true;
    shareModalIsOpen: boolean = false;
    currentIndex: number = 0;
    finishedRowIndex: number = 0;
    attempt: number = 0;
    answer: string = "";
    userAnswer: string = "";
    keyBoard: {[key: string]: string}  = KeyBoard
    colorBoard: any[] = Array(30);
    tileBoard: any[] = Array(30) ;
    toastIsOpen: boolean = false;
    toastMessage: string = ""
    shareString: string = ""

    fetchWordData (){
        const dataLength = Words.length;
        const randomNum = Math.floor(Math.random() * dataLength);
        this.answer = Words[randomNum];
    }

    reset = () =>  {
        this.tileBoard = Array(30);
        this.currentIndex = 0;
        this.finishedRowIndex = 0;
        this.answer = ""
        this.userAnswer = ""
        this.fetchWordData();
        this.keyBoard = KeyBoard
        this.colorBoard = Array(30)
        this.tileBoard = Array(30)
        this.attempt = 0;
    }

    pressLetterKey = (key: string)  => {
        if(this.currentIndex< this.finishedRowIndex * 5 + 5 && this.finishedRowIndex !== 6){
            this.tileBoard[this.currentIndex] = key
            this.userAnswer = this.userAnswer.concat(this.tileBoard[this.currentIndex])
            if(this.currentIndex < 29)this.currentIndex ++
        }
        console.log(this.userAnswer)
    }

     pressBackSpaceKey = () => {
        if(this.currentIndex>0  && this.currentIndex > this.finishedRowIndex * 5  && this.currentIndex <= this.finishedRowIndex * 5 + 5 && this.finishedRowIndex !==6){
            this.tileBoard[this.currentIndex -1] = undefined
            this.userAnswer = this.userAnswer.slice(0, -1)
            this.currentIndex--
        }

    }

    pressEnterKey = () =>  {
        let correct = 0;
        if(Words.includes(this.userAnswer) && this.finishedRowIndex !== 6){
            if(this.currentIndex < 30 ){
                this.attempt++
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
            }
            if(this.finishedRowIndex  < 6 ) {
                this.finishedRowIndex++
                this.userAnswer = "";
                if(this.finishedRowIndex == 6){
                    this.shareModalIsOpen = true
                }
            }
            this.toastMessage = ""
            this.toastIsOpen = false
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


    closeShareModal = () => {
        this.reset()
        this.shareModalIsOpen = false;
    }

    share = async () => {
        const moment = require('moment')
        const attempt = this.attempt;
        const dateString: string = moment().format('날짜 YYYY-MM-DD hh:mm:ss')
        const output = "Wordle" + dateString + "  " + `${attempt}` + "/6 \n\n";
        this.shareString = this.shareString.concat(output)
        this.colorBoard.map((v, i) => {
            if(i % 5 === 0){
                this.shareString = this.shareString.concat("\n");
            }
            switch(v){
                case Color.green:
                    this.shareString = this.shareString.concat("🟩")
                    break
                case Color.yellow:
                    this.shareString = this.shareString.concat("🟨")
                    break
                default:
                    this.shareString =  this.shareString.concat("⬛")
                    break
            }


        })
        await this.copyTextToClipboard();
        this.shareString = ""
        this.toastMessage = "Link Copied"
        this.toastIsOpen = true
        setTimeout(()  =>  {
            this.toastIsOpen = false
        }, 2000)


    }

    copyTextToClipboard = async () =>  {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(this.shareString);
        } else {
            return document.execCommand('copy', true, this.shareString);
        }
    }


}

export default GlobalStore