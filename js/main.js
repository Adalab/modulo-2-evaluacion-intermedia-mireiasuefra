'use strict';



const titleGame = document.querySelector('.js-titleGame');

const optionPlay = document.querySelector('.js-optionPlay');
const stone = document.querySelector('.js-stone');
const paper = document.querySelector('.js-paper');
const scissors = document.querySelector('.js-paper');


const buttonPlay = document.querySelector('.js-buttonPlay');
const buttonReset = document.querySelector('.js-buttonReset');

const resultGame = document.querySelector('.js-resultGame');
const playerPoints = document.querySelector('.js-playerPoints');
const pcPoints = document.querySelector('.js-pcPoints');

let  playerCounter = 0;
let  pcCounter = 0;
let gameCounter = 0




function getRandom(max) {
    return Math.ceil(Math.random() * max)
}

function pcOption() {
    const numberRandom = getRandom(10)

    if (numberRandom < 3) {
        return 'piedra';
    } else if (numberRandom >= 6) {
        return 'papel';
    } else {
        return'tijera';
    }    
}

function gameResult() {
    const machineOption = pcOption();
    const userOption = optionPlay.value;
    
    if (userOption === machineOption) {
        resultGame.innerHTML = 'Has empatado';
    } else if (userOption === 'piedra' && machineOption === 'tijera') {
        resultGame.innerHTML = '¡¡HAS GANADO!!' ;
        playerCounter += 1;
        playerPoints.innerHTML = `Jugadora: ${playerCounter} `
    } else if (userOption === 'piedra' && machineOption === 'papel') {
        resultGame.innerHTML = 'Has perdido :(' ;
        pcCounter += 1;
        pcPoints.innerHTML = `Computadora: ${pcCounter} `
    } else if (userOption === 'tijera' && machineOption === 'papel') {
        resultGame.innerHTML = '¡¡HAS GANADO!!' ;
        playerCounter += 1;
        playerPoints.innerHTML = `Jugadora: ${playerCounter} `
    } else if (userOption === 'tijera' && machineOption === 'piedra') {
        resultGame.innerHTML = 'Has perdido :(' ;
        pcCounter += 1;
        pcPoints.innerHTML = `Computadora: ${pcCounter} `
    } else if (userOption === 'papel' && machineOption === 'piedra') {
        resultGame.innerHTML = '¡¡HAS GANADO!!' ;
        playerCounter += 1;
        playerPoints.innerHTML = `Jugadora: ${playerCounter} `
    } else if (userOption === 'papel' && machineOption === 'tijera') {
        resultGame.innerHTML = 'Has perdido :(' ;
        pcCounter += 1;
        pcPoints.innerHTML = `Computadora: ${pcCounter} `
    }
}

function clickLimit() {
    const limit = 10;
    gameCounter += 1 
    

    if (gameCounter === limit) {
        gameCounter = 0;
        buttonPlay.classList.add('collapsed')
        buttonReset.classList.remove('collapsed')
        optionPlay.classList.add('collapsed')

    }
}


function handleButtonClick() {
    gameResult()     
    clickLimit()
}

 function handleButtonReset(ev) {
    ev.preventDefault()
    playerCounter = 0;
    pcCounter = 0;
    gameCounter = 0     
    resultGame.innerHTML = 'Vamos a Jugar!!';
    playerPoints.innerHTML = 'Jugadora:'
    pcPoints.innerHTML = 'Computadora:'
    buttonReset.classList.add('collapsed')
    buttonPlay.classList.remove('collapsed')
    optionPlay.classList.remove('collapsed')
 }


buttonReset.addEventListener('click', handleButtonReset);
buttonPlay.addEventListener('click', handleButtonClick);