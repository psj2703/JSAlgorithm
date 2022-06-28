    let table = [];
    let strike = 0;
    let ball = 0;
    let guess = [];

const isInTable = (table, number) => {
    for(let i=0; i<table.length; i++) {
        if(table[i]==number) {
            return true;
        }
    }
    return false;
}

const startGame = () => {    
    let table = [];
    while(table.length < 3) {
        let number = (Math.random() * 8) + 1;
        number = number.toFixed();
        if(isInTable(table, number) == false) {
            table.push(Number(number));
        }
    }
    return table;
}

const umpireship = (table, guess, strike, ball) => { 
    strike = 0;
    ball = 0;   
    if(table === guess) {
        return 'you Win';
    } 
    for(let i=0; i< table.length; i++) {
        if(table[i] === guess[i]) {
            strike++;
        } else if(isInTable(table, guess[i])) {
            ball++;
        }
    }
    return [strike, ball];
}

const inputNumber = (string) => {
    // let guess = string.toString();
    guess = Array.from(string);
    guess = guess.map(e => Number(e));
    return guess;
}

const playGame = (string) => {
    guess = inputNumber(string);
    return umpireship(table, guess, strike, ball);
}

const reset = () => {
}

document.addEventListener('DOMContentLoaded', () => {
    let table = [];
    let strike = 0;
    let ball = 0;
    let guess = [];

    const gameSet = document.querySelector('#setting');
    let string = document.querySelector('input');
    const enter = document.querySelector('#enter');
    const again = document.querySelector('#again');
    const game = document.querySelector('#game');
    const ready = document.querySelector('#ready');
    const reset = document.querySelector('#reset');

    gameSet.addEventListener('click', () => {
        table = startGame()
        ready.textContent = `ready`
        console.log(table)
    })
    
    enter.addEventListener('click', () => {
        guess = inputNumber(string.value)
        console.log(guess)
        strike = umpireship(table, guess, strike, ball)[0];
        ball = umpireship(table, guess, strike, ball)[1];
        game.textContent = `${strike} strikes, ${ball} balls`
    })
})