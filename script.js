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

function updatePulseEffect() {
    // Remove pulse class from all bars
    document.querySelectorAll('.bar').forEach(bar => {
        bar.classList.remove('pulse');
    });

    // Add pulse to the topmost blue bar
    const blueBars = document.querySelectorAll('.bar.player1-bar');
    if (blueBars.length > 0) {
        blueBars[0].classList.add('pulse');
    }

    // Add pulse to the bottommost red bar
    const redBars = document.querySelectorAll('.bar.player2-bar');
    if (redBars.length > 0) {
        redBars[redBars.length - 1].classList.add('pulse');
    }
}

function movePlayer1() {
    if (player1Position > 1) {
        const currentBar = document.getElementById(`bar${player1Position}`);
        const nextBar = document.getElementById(`bar${player1Position - 1}`);
        
        currentBar.classList.remove('player1-bar');
        
        setTimeout(() => {
            player1Position--;
            nextBar.classList.add('player1-bar');
            updatePulseEffect();
        }, 250);
    }
    updatePulseEffect();
}

function movePlayer2() {
    if (player2Position === 8) { // If Player 2 is off the board
        // Move Player 2 onto the board at the top (7th place)
        player2Position = 7;
        const currentBar = document.getElementById(`bar${player2Position}`);
        currentBar.classList.add('player2-bar');

        // Create and append the triangle
        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        currentBar.appendChild(triangle);
        
        // Create and append the bottom oval
        const bottomOval = document.createElement('div');
        bottomOval.classList.add('bottom-oval');
        currentBar.appendChild(bottomOval);
    } else if (player2Position > 1) { // Ensure Player 2 doesn't move out of the bars
        // Remove the triangle and bottom oval from the previous bar
        const previousBar = document.getElementById(`bar${player2Position}`);
        previousBar.classList.remove('player2-bar');
        const triangle = previousBar.querySelector('.triangle');
        const bottomOval = previousBar.querySelector('.bottom-oval');
        if (triangle) triangle.remove(); // Remove triangle if it exists
        if (bottomOval) bottomOval.remove(); // Remove bottom oval if it exists
        
        // Move Player 2 downward
        player2Position--;

        // Update the new current bar
        const newBar = document.getElementById(`bar${player2Position}`);
        newBar.classList.add('player2-bar');

        // Create and append the triangle
        const triangleNew = document.createElement('div');
        triangleNew.classList.add('triangle');
        newBar.appendChild(triangleNew);
        
        // Create and append the bottom oval
        const bottomOvalNew = document.createElement('div');
        bottomOvalNew.classList.add('bottom-oval');
        newBar.appendChild(bottomOvalNew);

        // Ensure all bars from the current position up are red
        for (let i = 7; i >= player2Position + 1; i--) {
            document.getElementById(`bar${i}`).classList.add('previous');
        }
    }
    updatePulseEffect();
}

updatePulseEffect();
