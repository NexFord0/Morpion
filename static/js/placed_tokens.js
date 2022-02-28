// -------------------- Initialisation du jeu 
let chosenColor;
let colorAlternator;

let team1Color = "blue";
let team2Color = "red";

let numberPlayedCells = 0; 
let playedCells = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let power1Allowed;

let power2Allowed;
let hasBeenSabotaged;

let power3Allowed;
let hasDisappear;

let powersOpacity;


// -------------------- Place the token on one of the board's cells
let cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {

        if(playedCells[index] == 0 && !blockage) {

            if(hasBeenSabotaged) {
                playedCells.forEach( (playedCell, index) => {
                    if(playedCell == 4) {
                        playedCells[index] = 0;
                        cells[index].style.borderRadius = "3%";
                    }
                })
                hasBeenSabotaged = false;
            }
            else if(hasDisappear) {
                cells.forEach( cell => {
                    cell.style.opacity = "1";
                })
                hasDisappear = false;
            }

            cell.style.borderRadius = "60%";
            numberPlayedCells++; 
            if(colorAlternator == "team1") {
                cell.style.borderColor = team1Color;
                colorAlternator = "team2";
                playedCells[index] = 1;

                alternatorContainer.textContent = team2ActualColor;
                alternatorContainer.style.color = team2ActualColor;

                if(power1Allowed) {
                    shotFired();
                    power1Allowed = false
                }
                else if(power2Allowed) {
                    sabotage();
                    power2Allowed = false
                }
                else if(power3Allowed) {
                    phantom();
                    power3Allowed = false;
                }
            }
            else if(colorAlternator = "team2") {
                cell.style.borderColor = team2Color;
                colorAlternator = "team1";
                playedCells[index] = 2;

                alternatorContainer.textContent = team1ActualColor;
                alternatorContainer.style.color = team1ActualColor;

                if(power1Allowed) {
                    shotFired();
                    power1Allowed = false
                }
                else if(power2Allowed) {
                    sabotage();
                    power2Allowed = false
                }
                else if(power3Allowed) {
                    phantom();
                    power3Allowed = false;
                }
            }
         
            if(powersOpacity == 1) {
                powersOpacity++;
                team1Power.style.opacity = "0.7";
                team2Power.style.opacity = "1";
            }
            else if(powersOpacity == 2) {
                powersOpacity--;
                team1Power.style.opacity = "1";
                team2Power.style.opacity = "0.7";
            }
        }
    })
})
