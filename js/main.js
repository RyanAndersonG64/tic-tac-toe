// let spaceContent = ['', '', '', '', '', '', '', '', ''];
// function spaceState() {
//     document.getElementById('space1').textContent = spaceContent[0]
//     document.getElementById('space2').textContent = spaceContent[1]
//     document.getElementById('space3').textContent = spaceContent[2]
//     document.getElementById('space4').textContent = spaceContent[3]
//     document.getElementById('space5').textContent = spaceContent[4]
//     document.getElementById('space6').textContent = spaceContent[5]
//     document.getElementById('space7').textContent = spaceContent[6]
//     document.getElementById('space8').textContent = spaceContent[7]
//     document.getElementById('space9').textContent = spaceContent[8]
// }

// let xTurn = true;
// let oTurn = false;

// function changeTurn() {
//     xTurn = !xTurn;
//     yTurn = !yTurn;
// }

// function add1() {
//     if 
//     s
//     changeTurn
// }
// document.getElementById('space1').addEventListener('click', addX1);

let space1 = document.getElementById('space1')
console.log(space1)
function addX1() {
    space1.textContent = 'X'
}

space1.addEventListener('click', addX1)