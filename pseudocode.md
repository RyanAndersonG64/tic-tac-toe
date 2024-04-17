use arrays to track what is in each space

if space = '', it is clickable
if space = 'x' || 'o' it is not clickable

victory example: if space1 && space5 && space 9 = 'x' ||space1 && space5 && space 9 = 'o', end game and display winner
    xwin = true or owin = true
if all 9 spaces !== '' && xwin = false && owin = false, declare a tie

reset button sets state of all spaces to ''