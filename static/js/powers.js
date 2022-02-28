let audio = document.querySelector("#audio");

let team1Power = document.querySelector("#team1-power");
let team2Power = document.querySelector("#team2-power");

let team1ActivationPower = false;
let team2ActivationPower = false;

let blockage = false;
let leftPower;
let rightPower;

team1Power.addEventListener("click", () => {
    
    if(colorAlternator == "team1") {
        if(leftPower >= 0 && leftPower <= 0.33) 
            power1Allowed = true;
        else if(leftPower >= 0.34 && leftPower <= 0.66)
            power2Allowed = true;
        else 
            power3Allowed = true;
        team1Power.style.display = "none";
    }
})

team2Power.addEventListener("click", () => {
    
    if(colorAlternator == "team2") {
        if(rightPower >= 0 && rightPower <= 0.33) 
            power1Allowed = true;
        else if(rightPower >= 0.34 && rightPower <= 0.66)
            power2Allowed = true;
        else 
            power3Allowed = true;
        team2Power.style.display = "none";
        team2PowerNone = false;
    }
})


function shotFired() {

    audio.setAttribute("src", "static/images_audios/audioShotFired1.mp3");

    blockage = true;

    let board = document.querySelector("#board").style;

    let team1PlayedCells = [];
    let team2PlayedCells = [];

    let destroyedCell;

    cells.forEach( (cell, index) => {
        if(playedCells[index] == 1) {
            team1PlayedCells.push(index);
        }
        else if(playedCells[index] == 2) {
            team2PlayedCells.push(index);
        }
    })

    board.transform = "scale(1.1)";

    setTimeout( () => {

        audio.setAttribute("src", "static/images_audios/audioShotFired2.mp3");
        board.transform = "scale(1)";

        if(team1PlayedCells.length != 0) {
            destroyedCell = Math.floor(Math.random() * team1PlayedCells.length);        
            cells[team1PlayedCells[destroyedCell]].style.borderRadius = "3%";
            if(colorNow == "rgb(9, 9, 9)")
                cells[team1PlayedCells[destroyedCell]].style.borderColor = "rgb(233, 233, 233)";
            else
                cells[team1PlayedCells[destroyedCell]].style.borderColor = "rgb(9, 9, 9)";
            playedCells[team1PlayedCells[destroyedCell]] = 0;
            numberPlayedCells--;
        }
        if(team2PlayedCells.length != 0) {
            destroyedCell = Math.floor(Math.random() * team2PlayedCells.length);    
            cells[team2PlayedCells[destroyedCell]].style.borderRadius = "3%";
            if(colorNow == "rgb(9, 9, 9)")
                cells[team2PlayedCells[destroyedCell]].style.borderColor = "rgb(233, 233, 233)";
            else
                cells[team2PlayedCells[destroyedCell]].style.borderColor = "rgb(9, 9, 9)";
            playedCells[team2PlayedCells[destroyedCell]] = 0;
            numberPlayedCells--;
        }

        blockage = false;
    }, 1150)

    setTimeout( () => {
        audio.setAttribute("src", "static/images_audios/audioSilence.mp3");
    }, 2300)
}


function sabotage() {

    audio.setAttribute("src", "static/images_audios/audioSabotage.mp3");
    blockage = true;

    let sabotagedCellsIndex = [];
    let sabotagedCell;

    let board = document.querySelector("#board").style;
    board.transition = "1s";

    board.transform = "rotate(180deg)";

    setTimeout( () => {

        cells.forEach( (cell, index) => {
            if(playedCells[index] == 0 || playedCells[index] == 4) {
                sabotagedCellsIndex.push(index);
            }
        })

        if(sabotagedCellsIndex.length > 1) {
    
            for(let i = 0 ; i <= (Math.ceil(sabotagedCellsIndex.length / 2)) ; i++) {
                sabotagedCell = (Math.floor(Math.random() * sabotagedCellsIndex.length));
    
                cells[sabotagedCellsIndex[sabotagedCell]].style.borderTopLeftRadius = "60%";
                cells[sabotagedCellsIndex[sabotagedCell]].style.borderBottomRightRadius = "60%";
    
                playedCells[sabotagedCellsIndex[sabotagedCell]] = 4;
                sabotagedCellsIndex.splice(sabotagedCell, 1);
            }
            hasBeenSabotaged = true;
        }
        blockage = false;
        audio.setAttribute("src", "static/images_audios/audioSilence.mp3");
        board.transform = "rotate(0deg)";
    }, 1300)
}


function phantom() {

    audio.setAttribute("src", "static/images_audios/audioPhantom.mp3");
    blockage = true;

    let board = document.querySelector("#board").style;
    board.transition = "0.2s";

    let i = 0;

    let disappearance = setInterval( () => {
        if(i % 2 == 0) {
            board.transform = "translate(15%, 0)";
            i++;
        }
        else {
            board.transform = "translate(-15%, 0)";
            i++;
        }

        if(i == 5) {
            clearInterval(disappearance);
            board.transform = "translate(0, 0)";
            cells.forEach( cell => {
                cell.style.opacity = "0";
            })
            blockage = false;
            hasDisappear = true;
            audio.setAttribute("src", "static/images_audios/audioSilence.mp3");
        }
    }, 230)
}