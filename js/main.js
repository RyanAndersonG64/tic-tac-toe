let space1 = 0;
let space2 = 0;
let space3 = 0;
let space4 = 0;
let space5 = 0;
let space6 = 0;
let space7 = 0;
let space8 = 0;
let space9 = 0;
let gameOver = false;
let xTurn = true;
let xWins = 0;
let oWins = 0;
document.getElementById('xWins').textContent = 'Wins: ' + xWins.toString()
document.getElementById('oWins').textContent = 'Wins: ' + oWins.toString()

function emptyInput1() {
    if (document.getElementById('player1').value === "Enter X's name") {
    document.getElementById('player1').value = '';
    }
}

document.getElementById('player1').addEventListener('click', emptyInput1)

function emptyInput2() {
    if (document.getElementById('player2').value === "Enter O's name") {
    document.getElementById('player2').value = '';
    }
}

document.getElementById('player2').addEventListener('click', emptyInput2)

function switchTurn(){
    xTurn = !xTurn
    if (xTurn === true){
        document.getElementById('gameText').textContent = "X's turn"
        document.getElementById('gameText').style.color = 'red'
    } else {
        document.getElementById('gameText').textContent = "O's turn"
        document.getElementById('gameText').style.color = 'blue'
    }
}

// functions for playing the game
function add1() {
    if (document.getElementById('space1').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space1').textContent = 'X'
        document.getElementById('space1').style.color = 'red'
        space1 = 1;
    } else {
        document.getElementById('space1').textContent = 'O'
        document.getElementById('space1').style.color = 'blue'
        space1 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space1').addEventListener('click', add1)

function add2() {
    if (document.getElementById('space2').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space2').textContent = 'X'
        document.getElementById('space2').style.color = 'red'
        space2 = 1;
    } else {
        document.getElementById('space2').textContent = 'O'
        document.getElementById('space2').style.color = 'blue'
        space2 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space2').addEventListener('click', add2)

function add3() {
    if (document.getElementById('space3').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space3').textContent = 'X'
        document.getElementById('space3').style.color = 'red'
        space3 = 1;
    } else {
        document.getElementById('space3').textContent = 'O'
        document.getElementById('space3').style.color = 'blue'
        space3 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space3').addEventListener('click', add3)

function add4() {
    if (document.getElementById('space4').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space4').textContent = 'X'
        document.getElementById('space4').style.color = 'red'
        space4 = 1;
    } else {
        document.getElementById('space4').textContent = 'O'
        document.getElementById('space4').style.color = 'blue'
        space4 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space4').addEventListener('click', add4)

function add5() {
    if (document.getElementById('space5').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space5').textContent = 'X'
        document.getElementById('space5').style.color = 'red'
        space5 = 1;
    } else {
        document.getElementById('space5').textContent = 'O'
        document.getElementById('space5').style.color = 'blue'
        space5 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space5').addEventListener('click', add5)

function add6() {
    if (document.getElementById('space6').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space6').textContent = 'X'
        document.getElementById('space6').style.color = 'red'
        space6 = 1;
    } else {
        document.getElementById('space6').textContent = 'O'
        document.getElementById('space6').style.color = 'blue'
        space6 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space6').addEventListener('click', add6)

function add7() {
    if (document.getElementById('space7').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space7').textContent = 'X'
        document.getElementById('space7').style.color = 'red'
        space7 = 1;
    } else {
        document.getElementById('space7').textContent = 'O'
        document.getElementById('space7').style.color = 'blue'
        space7 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space7').addEventListener('click', add7)

function add8() {
    if (document.getElementById('space8').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space8').textContent = 'X'
        document.getElementById('space8').style.color = 'red'
        space8 = 1;
    } else {
        document.getElementById('space8').textContent = 'O'
        document.getElementById('space8').style.color = 'blue'
        space8 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space8').addEventListener('click', add8)

function add9() {
    if (document.getElementById('space9').textContent === '' && gameOver === false) {
    if (xTurn === true) {
        document.getElementById('space9').textContent = 'X'
        document.getElementById('space9').style.color = 'red'
        space9 = 1;
    } else {
        document.getElementById('space9').textContent = 'O'
        document.getElementById('space9').style.color = 'blue'
        space9 = 2;
    }
    switchTurn()
}
victoryCheck()
}
document.getElementById('space9').addEventListener('click', add9)

function victoryCheck(){
    if (space1 === 1 && space2 === 1 && space3 === 1 
    || space4 === 1 && space5 === 1 && space6 === 1 
    || space7 === 1 && space8 === 1 && space9 === 1
    || space1 === 1 && space4 === 1 && space7 === 1
    || space2 === 1 && space5 === 1 && space8 === 1
    || space3 === 1 && space6 === 1 && space9 === 1
    || space1 === 1 && space5 === 1 && space9 === 1
    || space3 === 1 && space5 === 1 && space7 === 1) {
        gameOver = true;
        document.getElementById('reset').textContent = 'Play again'
        if (document.getElementById('player1').value === "Enter X's name" || (document.getElementById('player1').value === "")) {
        document.getElementById('gameText').textContent = "X wins!"
    } else {
        document.getElementById('gameText').textContent = document.getElementById('player1').value + " wins!"
    }
        xWins += 1;
        document.getElementById('xWins').textContent = 'Wins: ' + xWins.toString()
        document.getElementById('gameText').style.color = 'red'
        xTurn = false
    } else if (space1 === 2 && space2 === 2 && space3 === 2
    || space4 === 2 && space5 === 2 && space6 === 2 
    || space7 === 2 && space8 === 2 && space9 === 2
    || space1 === 2 && space4 === 2 && space7 === 2
    || space2 === 2 && space5 === 2 && space8 === 2
    || space3 === 2 && space6 === 2 && space9 === 2
    || space1 === 2 && space5 === 2 && space9 === 2
    || space3 === 2 && space5 === 2 && space7 === 2) {
        gameOver = true;
        document.getElementById('reset').textContent = 'Play again'
        if (document.getElementById('player2').value === "Enter O's name" || (document.getElementById('player2').value === "")) {
            document.getElementById('gameText').textContent = "O wins!"
        } else {
            document.getElementById('gameText').textContent = document.getElementById('player2').value + " wins!"
        }
        oWins += 1;
        document.getElementById('oWins').textContent = 'Wins: ' + oWins.toString()
        document.getElementById('gameText').style.color = 'blue'
        xTurn = true
    } else if (space1 !== 0 && space2 !== 0 && space3 !== 0 && space4 !== 0 && space5 !== 0 && space6 !== 0 && space7 !== 0 && space8 !== 0 && space9 !== 0) {
        gameOver = true;
        document.getElementById('gameText').textContent = "Draw!"
        document.getElementById('reset').textContent = 'Play again'
        document.getElementById('gameText').style.color = 'black'
    }
}

function reset() {
    space1 = 0;
    space2 = 0;
    space3 = 0;
    space4 = 0;
    space5 = 0;
    space6 = 0;
    space9 = 0;
    space7 = 0;
    space8 = 0;
    gameOver = false;
    document.getElementById('space1').textContent = ''
    document.getElementById('space2').textContent = ''
    document.getElementById('space3').textContent = ''
    document.getElementById('space4').textContent = ''
    document.getElementById('space5').textContent = ''
    document.getElementById('space6').textContent = ''
    document.getElementById('space7').textContent = ''
    document.getElementById('space8').textContent = ''
    document.getElementById('space9').textContent = ''
    document.getElementById('reset').textContent = 'Reset'
    xTurn = !xTurn
    switchTurn()
}
document.getElementById('reset').addEventListener('click', reset)