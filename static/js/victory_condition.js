let end = false;

let team1Points = 0;
let team2Points = 0;

cells.forEach(cell => {
    cell.addEventListener("click", () => {

        if( (playedCells[0] == 1 && playedCells[1] == 1 && playedCells[2] == 1 && !blockage) ||
            (playedCells[3] == 1 && playedCells[4] == 1 && playedCells[5] == 1 && !blockage) || 
            (playedCells[6] == 1 && playedCells[7] == 1 && playedCells[8] == 1 && !blockage) ||

            (playedCells[0] == 1 && playedCells[3] == 1 && playedCells[6] == 1 && !blockage) ||
            (playedCells[1] == 1 && playedCells[4] == 1 && playedCells[7] == 1 && !blockage) ||
            (playedCells[2] == 1 && playedCells[5] == 1 && playedCells[8] == 1 && !blockage) ||   
            
            (playedCells[0] == 1 && playedCells[4] == 1 && playedCells[8] == 1 && !blockage) ||
            (playedCells[2] == 1 && playedCells[4] == 1 && playedCells[6] == 1 && !blockage)
        ) {
            alert("Team " + team1ActualColor + " won !");
            end = true;
            team1Points++;
            document.querySelector("#team1-points").textContent = team1Points;
        }

        else if( (playedCells[0] == 2 && playedCells[1] == 2 && playedCells[2] == 2 && !blockage) ||
            (playedCells[3] == 2 && playedCells[4] == 2 && playedCells[5] == 2 && !blockage) || 
            (playedCells[6] == 2 && playedCells[7] == 2 && playedCells[8] == 2 && !blockage) ||

            (playedCells[0] == 2 && playedCells[3] == 2 && playedCells[6] == 2 && !blockage) ||
            (playedCells[1] == 2 && playedCells[4] == 2 && playedCells[7] == 2 && !blockage) ||
            (playedCells[2] == 2 && playedCells[5] == 2 && playedCells[8] == 2 && !blockage) ||   
            
            (playedCells[0] == 2 && playedCells[4] == 2 && playedCells[8] == 2 && !blockage) ||
            (playedCells[2] == 2 && playedCells[4] == 2 && playedCells[6] == 2 && !blockage)
        ) {
            alert("Team " + team2ActualColor + " won !");
            end = true;
            team2Points++;
            document.querySelector("#team2-points").textContent = team2Points;
        }

        else if(numberPlayedCells == 9 && !blockage) {
            alert("Nobody won...");
            end = true;
        }

    
        if(end) {
            numberPlayedCells = 0;
            colorAlternator = chosenColor;
            end = false;

            cells.forEach((cell, index) => {
                cell.style.borderRadius = "3%";
                if(colorNow == "rgb(9, 9, 9)")
                    cell.style.borderColor = "rgb(233, 233, 233)";
                else
                    cell.style.borderColor = "rgb(9, 9, 9)";
                playedCells[index] = 0;
            })

            if(colorAlternator == "team1") {
                powersOpacity = 1;
                team1Power.style.opacity = "1";
                team2Power.style.opacity = "0.7"; 

                alternatorContainer.textContent = team1ActualColor;
                alternatorContainer.style.color = team1ActualColor;
            }
            else {
                powersOpacity = 2;
                team1Power.style.opacity = "0.7";
                team2Power.style.opacity = "1"; 
                
                alternatorContainer.textContent = team2ActualColor;
                alternatorContainer.style.color = team2ActualColor;
            }

            if(team1Points == 3 || team2Points == 3) {
                if(team1Points > team2Points) {
                    alert(team1Points + " to " + team2Points + " for Team " + team1ActualColor + " !");
                    chosenPower(2);
                }
                else {
                    alert(team2Points + " to " + team1Points + " for Team " + team2ActualColor + " !");
                    chosenPower(1);
                }

                clearInterval(timer);
                secondsContainer.textContent = "00";
                minutesContainer.textContent = "00";

                document.querySelector("#team1-start").innerHTML = "Team " + team1ActualColor + "<br>start";
                document.querySelector("#team2-start").innerHTML = "Team " + team2ActualColor + "<br>start";

                team1Points = 0;
                team2Points = 0;
                document.querySelector("#team1-points").textContent = 0;
                document.querySelector("#team2-points").textContent = 0;

                choiceContainer.display = "flex";
                navigationContainer.display = "none";
                timerContainer.display = "none";
                boardContainer.display = "none";
                alternatorContainer.style.display = "none";
            }
        }

    })
})


// -------------------- Powers attribution

let imgPouvTeam1 = document.querySelector("#img-pouv-team1");
let imgPouvTeam2 = document.querySelector("#img-pouv-team2");

function chosenPower(n) {
    
    if(n == 1) {
        leftPower = (Math.random()).toFixed(2);

        team1Power.style.display = "block";
        team1ActivationPower = "true";
        if(leftPower >= 0 && leftPower <= 0.33) 
            imgPouvTeam1.setAttribute("src", "static/images_audios/imageShotFired.png");
        else if(leftPower >= 0.34 && leftPower <= 0.66)
            imgPouvTeam1.setAttribute("src", "static/images_audios/imageSabotage.png");
        else    
            imgPouvTeam1.setAttribute("src", "static/images_audios/imagePhantom.png");
    }

    else {
        rightPower = (Math.random()).toFixed(2);
        
        team2Power.style.display = "block";
        team2ActivationPower = "true";
        team2PowerNone = true;
        if(rightPower >= 0 && rightPower <= 0.33) 
            imgPouvTeam2.setAttribute("src", "static/images_audios/imageShotFired.png");
        else if(rightPower >= 0.34 && rightPower <= 0.66)
            imgPouvTeam2.setAttribute("src", "static/images_audios/imageSabotage.png");
        else    
            imgPouvTeam2.setAttribute("src", "static/images_audios/imagePhantom.png");

        if(gearsRotation) {
            team2Power.style.display = "none";
        }
    }
}
