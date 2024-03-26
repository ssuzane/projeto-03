'use strict'

//usando a Api do mdn para voz : https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

//criando as variaveis
const AreadeFala = document.querySelector("#br")
const btnFalar = document.querySelector("#btnfalarVoz")
const btnParaFalar = document.querySelector("#btnParaFalar")


//dividindo o reconhecimento de voz
class speedchAi{

    constructor(){
        const SpeedToText = window.SpeechRecognition || window.webkitSpeechRecognition

    }
    
}