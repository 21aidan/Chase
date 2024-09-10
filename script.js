// Track the current positions of Player 1 and Player 2
let player1Position = 4; // Starting at bar 4
let player2Position = 8; // Player 2 starts off the top, moving downward

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        // Player 1 correct answer
        movePlayer1();
    } else if (event.key === "2") {
        // Player 2 correct answer
        movePlayer2();
    }
});

function movePlayer1() {
    if (player1Position > 1) { // Ensure Player 1 doesn't move out of the bars
        // Turn current bar light blue
        document.getElementById(`bar${player1Position}`).classList.remove('player1-bar');
        
        // Move to the next bar up
        player1Position--;
        
        // Turn new current bar dark blue
        document.getElementById(`bar${player1Position}`).classList.add('player1-bar');
    }
}

function movePlayer2() {
    if (player2Position === 8) { // If Player 2 is off the board
        // Move Player 2 onto the board at the top (7th place)
        player2Position = 7;
        document.getElementById(`bar${player2Position}`).classList.add('player2-bar');
        document.getElementById(`bar${player2Position}`).classList.add('triangle');
    } else if (player2Position > 1) { // Ensure Player 2 doesn't move out of the bars
        // Remove the triangle class from the previous bar
        document.getElementById(`bar${player2Position}`).classList.remove('triangle');
        // document.getElementById(`bar${player2Position}`).classList.remove('player2-bar');
        
        // Move Player 2 downward
        player2Position--;

        // Turn the new bar red
        document.getElementById(`bar${player2Position}`).classList.add('player2-bar');
        
        // Add the triangle class to the new current bar
        document.getElementById(`bar${player2Position}`).classList.add('triangle');
    }
}

