'use strict';

console.log('Preparada??');

// Nos traemos las VARIABLES GLOBALES. 

const titleGame = document.querySelector('.js-titleGame');

const optionPlay = document.querySelector('.js-optionPlay');
const stone = document.querySelector('.js-stone');
const paper = document.querySelector('.js-paper');
const scissors = document.querySelector('.js-paper');


const buttonPlay = document.querySelector('.js-buttonPlay');

const resultGame = document.querySelector('.js-resultGame');
const playerPoints = document.querySelector('.js-playerPoints');
const pcPoints = document.querySelector('.js-pcPoints');

// Funciones

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
        resultGame.innerHTML = 'HAS EMPATADO';
    } else if (userOption === 'piedra' && machineOption === 'tijera') {
        resultGame.innerHTML = 'HAS GANADO' ;
    } else if (userOption === 'piedra' && machineOption === 'papel') {
        resultGame.innerHTML = 'HAS PERDIDO' ;
    } else if (userOption === 'tijera' && machineOption === 'papel') {
        resultGame.innerHTML = 'HAS GANADO' ;
    } else if (userOption === 'tijera' && machineOption === 'piedra') {
        resultGame.innerHTML = 'HAS PERDIDO' ;
    } else if (userOption === 'papel' && machineOption === 'piedra') {
        resultGame.innerHTML = 'HAS GANADO' ;
    } else if (userOption === 'papel' && machineOption === 'tijera') {
        resultGame.innerHTML = 'HAS PERDIDO' ;
    }
}

function handleButtonClick() {
    gameResult()     
}

// Código global. Se ejecuta cuando se carga la pagina. (ejemplo: LISTENERS)

buttonPlay.addEventListener('click', handleButtonClick);