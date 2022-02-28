// -------------------- Start of the game
let team1ActualColor = "blue";
let team2ActualColor = "red";

let colorNow = "rgb(233, 233, 233)";

document.querySelector("#team1-start").innerHTML = "Team " + team1ActualColor + "<br>start";
document.querySelector("#team2-start").innerHTML = "Team " + team2ActualColor + "<br>start";

let choiceContainer = document.querySelector("#choice-container").style;
let navigationContainer = document.querySelector("#navigation-container").style;
let timerContainer = document.querySelector("#timer-container").style;
let boardContainer = document.querySelector("#board-container").style;
let rulesContainer = document.querySelector("#rules-container").style;
let powersContainer = document.querySelector("#powers-container").style;
let colorsContainer = document.querySelector("#colors-container").style;
let alternatorContainer = document.querySelector("#alternator-container"); 

let colorChoice = document.querySelectorAll(".start");

colorChoice.forEach( (choice, index) => {
    choice.addEventListener("click", () => {
        choiceContainer.display = "none";
        navigationContainer.display = "flex";
        timerContainer.display = "flex";
        boardContainer.display = "flex";
        alternatorContainer.style.display = "block";

        if(index == 0) {
            chosenColor = "team1"; 
            colorAlternator = "team1";

            powersOpacity = 1;
            team1Power.style.opacity = "1";
            team2Power.style.opacity = "0.7";

            alternatorContainer.textContent = team1ActualColor;
            alternatorContainer.style.color = team1ActualColor;
        }
        else {
            chosenColor = "team2";
            colorAlternator = "team2";

            powersOpacity = 2;
            team1Power.style.opacity = "0.7";
            team2Power.style.opacity = "1";

            alternatorContainer.textContent = team2ActualColor;
            alternatorContainer.style.color = team2ActualColor;
        }
    })
})


// -------------------- Timer

let secondsContainer = document.querySelector("#seconds");
let minutesContainer = document.querySelector("#minutes");
let timer;


colorChoice.forEach( choice => {
    choice.addEventListener("click", () => {

        let seconds = 0;
        let minutes = 0;
        
        timer = setInterval( () => {

            if(seconds == 59 && minutes < 59) {
                seconds = 0;
                minutes ++;
            }
            else if(seconds < 59 && minutes <= 59)
                seconds++;
            else
                clearInterval(timer); 
    
            if(seconds < 10)
                secondsContainer.textContent = "0" + seconds;
            else
                secondsContainer.textContent = seconds;

            if(minutes < 10)
                minutesContainer.textContent = "0" + minutes;
            else
                minutesContainer.textContent = minutes;

            }, 1000)
    })
})


// -------------------- Open the navigation bar

let informations = document.querySelectorAll(".information");
let gears = document.querySelector("#gears")

let imgGears = document.querySelector("#img-gears").style;
let gearsRotation = false;
let team2PowerNone;

gears.addEventListener("click", () => {

    if(!gearsRotation) {
        informations.forEach(information => {
            information.style.display = "inline";
        })
        navigationContainer.backgroundColor = colorNow;
        imgGears.rotate = "90deg";
        gearsRotation = true;
        if(team2PowerNone)
            team2Power.style.display = "none";
            navigationContainer.transition = "1s";
    }
    else {
        navigationContainer.transition = "0s";
        informations.forEach(information => {
            information.style.display = "none";
        })
        navigationContainer.backgroundColor = "";
        imgGears.rotate = "0deg";
        gearsRotation = false;
        if(team2PowerNone)
            team2Power.style.display = "block";
    }
})

// -------------------- Reload the game

document.querySelector("#reload").addEventListener("click", e => {
    let restart = confirm("Do you want to restart the game ?")
    if(!restart)
        e.preventDefault();
})


// -------------------- Read rules

document.querySelector("#rules").addEventListener("click", () => {

    navigationContainer.display = "none";
    timerContainer.display = "none";
    boardContainer.display = "none";
    alternatorContainer.style.display = "none";
    rulesContainer.display = "flex";
})

document.querySelector("#leave-rules").addEventListener("click", () => {

    navigationContainer.display = "flex";
    timerContainer.display = "flex";
    boardContainer.display = "flex";
    alternatorContainer.style.display = "block";
    rulesContainer.display = "none";
})


// -------------------- Read powers

document.querySelector("#powers").addEventListener("click", () => {

    navigationContainer.display = "none";
    timerContainer.display = "none";
    boardContainer.display = "none";
    alternatorContainer.style.display = "none";
    powersContainer.display = "flex";
})

document.querySelector("#leave-powers").addEventListener("click", () => {

    navigationContainer.display = "flex";
    timerContainer.display = "flex";
    boardContainer.display = "flex";
    alternatorContainer.style.display = "block";
    powersContainer.display = "none";
})


let team1ChangeColor = document.querySelector("#team1-color");
let team2ChangeColor = document.querySelector("#team2-color");

let colorsList = ["aqua", "aquamarine", "bisque", "blue", "blueviolet", 
                  "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", 
                  "coral", "crimson", "cyan", "darkblue", "darkcyan", 
                  "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", 
                  "darkmagenta", "darkorange", "darkorchid", "darkred", "darksalmon", 
                  "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", 
                  "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", 
                  "dodgerblue", "firebrick", "forestgreen", "fuchsia", "gainsboro", 
                  "gold", "goldenrod", "gray", "grey", "green", 
                  "greenyellow", "hotpink", "indianred", "indigo", "khaki", 
                  "lawngreen", "lightblue", "lightcoral", "lightcyan", "lightgray", 
                  "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", 
                  "lightskyblue", "lime", "limegreen", "magenta", "maroon", 
                  "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "midnightblue", 
                  "navy", "olive", "olivedrab", "orange", "orangered", 
                  "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", 
                  "peachpuff", "peru", "pink", "plum", "powderblue", 
                  "purple", "rebeccapurple", "red", "rosybrown", "royalblue", 
                  "saddlebrown", "salmon", "sandybrown", "seagreen", "sienna", 
                  "silver", "skyblue", "slateblue", "slategray", "slategrey", 
                  "springgreen", "steelblue", "tan", "teal", "tomato", 
                  "turquoise", "violet", "wheat", "yellow", "yellowgreen"]

let changeColorValidation = false;


// -------------------- Team 1 color change

team1ChangeColor.addEventListener("change", () => {
    let isColorInList = team1ChangeColor.value.replace(/ /g, "").toLowerCase();

    changeColorValidation = false;
    colorsList.forEach( color => {
        if(color == isColorInList) 
            changeColorValidation = true;
    })

    if(isColorInList == team2ActualColor || isColorInList == team1ActualColor) {
        team1ChangeColor.setAttribute("placeholder", "Already chosen...");
        team1ChangeColor.value = "";
    }
    else if(changeColorValidation) {
        team1ActualColor = isColorInList; 
        document.querySelector("body").style.backgroundImage = "linear-gradient(90deg," + team1ActualColor + "," + team2ActualColor + ")";
        document.querySelector("#team1-start").style.color = team1ActualColor;        
        document.querySelector("#team1-div").style.borderColor = team1ActualColor;

        team1ChangeColor.setAttribute("placeholder", "Color changed !");
        team1ChangeColor.value = "";
        team1Color = team1ActualColor;

        cells.forEach( (cell, index) => {
            if(playedCells[index] == 1)
                cell.style.borderColor = team1ActualColor;
        })
    }
    else {
        team1ChangeColor.setAttribute("placeholder", "Unknown color...");
        team1ChangeColor.value = "";
    }

    if(colorAlternator == "team1") {
        alternatorContainer.textContent = team1ActualColor;
        alternatorContainer.style.color = team1ActualColor;
    }
})


// -------------------- Team 2 color change

team2ChangeColor.addEventListener("change", () => {
    let isColorInList = team2ChangeColor.value.replace(/ /g, "").toLowerCase();

    changeColorValidation = false;
    colorsList.forEach( color => {
        if(color == isColorInList) 
            changeColorValidation = true;
    })

    if(isColorInList == team1ActualColor || isColorInList == team2ActualColor) {
        team2ChangeColor.setAttribute("placeholder", "Already chosen...");
        team2ChangeColor.value = "";
    }
    else if(changeColorValidation) {
        team2ActualColor = isColorInList; 
        document.querySelector("body").style.backgroundImage = "linear-gradient(90deg," + team1ActualColor + "," + team2ActualColor + ")";
        document.querySelector("#team2-start").style.color = team2ActualColor;        
        document.querySelector("#team2-div").style.borderColor = team2ActualColor;

        team2ChangeColor.setAttribute("placeholder", "Color changed !");
        team2ChangeColor.value = "";
        team2Color = team2ActualColor;

        cells.forEach( (cell, index) => {
            if(playedCells[index] == 2)
                cell.style.borderColor = team2ActualColor;
        })
    }
    else {
        team2ChangeColor.setAttribute("placeholder", "Unknown color...");
        team2ChangeColor.value = "";
    }

    if(colorAlternator == "team2") {
        alternatorContainer.textContent = team2ActualColor;
        alternatorContainer.style.color = team2ActualColor;
    }
})


// -------------------- Look at colors 

document.querySelector("#colors").addEventListener("click", () => {

    navigationContainer.display = "none";
    timerContainer.display = "none";
    boardContainer.display = "none";
    alternatorContainer.style.display = "none";
    colorsContainer.display = "flex";
})

document.querySelector("#leave-colors").addEventListener("click", () => {

    navigationContainer.display = "flex";
    timerContainer.display = "flex";
    boardContainer.display = "flex";
    alternatorContainer.style.display = "block";
    colorsContainer.display = "none";
})


// -------------------- Change the morning-night

let morningNight = document.querySelector("#morning-night");
let change = false;

morningNight.addEventListener("click", () => {

    if(!change) {
        morningNight.style.marginLeft = "2.2em";
        change = true;

        navigationContainer.backgroundColor = "rgb(9, 9, 9)";
        board.style.backgroundColor = "rgb(9, 9, 9)";
        board.style.borderColor = "rgb(233, 233, 233)";

        cells.forEach( (cell, index) => {
            if(playedCells[index] == 0)
                cell.style.borderColor = "rgb(233, 233, 233)";
        })

        colorNow = "rgb(9, 9, 9)";

        document.querySelector("#team1-points").style.backgroundColor = "rgb(233, 233, 233)";
        document.querySelector("#team1-points").style.borderColor = "rgb(233, 233, 233)";        
        document.querySelector("#team2-points").style.backgroundColor = "rgb(233, 233, 233)";        
        document.querySelector("#team2-points").style.borderColor = "rgb(233, 233, 233)";

        alternatorContainer.style.backgroundColor = "rgb(233, 233, 233)";
        alternatorContainer.style.borderColor = "rgb(233, 233, 233)";

        document.querySelector("#minutes").style.backgroundColor = "rgb(233, 233, 233)";
        document.querySelector("#minutes").style.borderColor = "rgb(233, 233, 233)";
        document.querySelector("#separateur").style.backgroundColor = "rgb(233, 233, 233)";
        document.querySelector("#separateur").style.borderColor = "rgb(233, 233, 233)";
        document.querySelector("#seconds").style.backgroundColor = "rgb(233, 233, 233)";
        document.querySelector("#seconds").style.borderColor = "rgb(233, 233, 233)";

        document.querySelector("#powers").style.color = "rgb(233, 233, 233)";
        document.querySelector("#rules").style.color = "rgb(233, 233, 233)";
        document.querySelector("#reload").style.color = "rgb(233, 233, 233)";
        document.querySelector("#colors").style.color = "rgb(233, 233, 233)";

        document.querySelector("#day-container").style.borderColor = "rgb(233, 233, 233)";
        morningNight.style.backgroundColor = "rgb(233, 233, 233)";
        morningNight.style.borderColor = "rgb(233, 233, 233)";

        document.querySelector("#team1-color").style.borderColor = "rgb(233, 233, 233)"
        document.querySelector("#team2-color").style.borderColor = "rgb(233, 233, 233)"

        document.querySelector("#img-gears").setAttribute("src", "static/images_audios/imageGear2.png");
    }
    else {
        morningNight.style.marginLeft = "0.1em";
        change = false;

        navigationContainer.backgroundColor = "rgb(233, 233, 233)";
        board.style.backgroundColor = "rgb(233, 233, 233)";
        board.style.borderColor = "rgb(9, 9, 9)";

        cells.forEach( (cell, index) => {
            if(playedCells[index] == 0)
                cell.style.borderColor = "rgb(9, 9, 9)";
        })

        colorNow = "rgb(233, 233, 233)";

        document.querySelector("#team1-points").style.backgroundColor = "rgb(9, 9, 9)";
        document.querySelector("#team1-points").style.borderColor = "rgb(9, 9, 9)";
        document.querySelector("#team2-points").style.backgroundColor = "rgb(9, 9, 9)";
        document.querySelector("#team2-points").style.borderColor = "rgb(9, 9, 9)";

        alternatorContainer.style.backgroundColor = "rgb(9, 9, 9)";
        alternatorContainer.style.borderColor = "rgb(9, 9, 9)";

        document.querySelector("#minutes").style.backgroundColor = "rgb(9, 9, 9)";
        document.querySelector("#minutes").style.borderColor = "rgb(9, 9, 9)";
        document.querySelector("#separateur").style.backgroundColor = "rgb(9, 9, 9)";
        document.querySelector("#separateur").style.borderColor = "rgb(9, 9, 9)";
        document.querySelector("#seconds").style.backgroundColor = "rgb(9, 9, 9)";
        document.querySelector("#seconds").style.borderColor = "rgb(9, 9, 9)";

        document.querySelector("#powers").style.color = "rgb(9, 9, 9)";
        document.querySelector("#rules").style.color = "rgb(9, 9, 9)";
        document.querySelector("#reload").style.color = "rgb(9, 9, 9)";
        document.querySelector("#colors").style.color = "rgb(9, 9, 9)";

        document.querySelector("#day-container").style.borderColor = "rgb(9, 9, 9)";
        morningNight.style.backgroundColor = "rgb(9, 9, 9)";
        morningNight.style.borderColor = "rgb(9, 9, 9)";

        document.querySelector("#team1-color").style.borderColor = "rgb(9, 9, 9)"
        document.querySelector("#team2-color").style.borderColor = "rgb(9, 9, 9)"

        document.querySelector("#img-gears").setAttribute("src", "static/images_audios/imageGear1.png");
    }
})


