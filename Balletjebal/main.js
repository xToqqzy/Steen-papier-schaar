//hier is de systeem waar je wint verliest of draw speelt
var choicesObject = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
}

let score = 0;
let computerscore = 0;
let level = 0;

//hier kiest de speler zijn keuzes
function checker(input) {
    const choices = ["rock", "paper", "scissor"];
    const num = Math.floor(Math.random() * 3);

    const computerChoice = choices[num];
    let result;

    switch (choicesObject[input][computerChoice]) {

        case 'win':
            result = "YOU WIN";
            score += 1
            computerscore
            document.getElementById("computer-choice").innerHTML= "The computer choose: " + computerChoice;

            break;
        case 'lose':
            result = "YOU LOSE";
            score
            computerscore += 1;
            document.getElementById("computer-choice").innerHTML= "The computer choose: " + computerChoice;

            break;
        default:
            result = "DRAW";
            score
            computerscore
            document.getElementById("computer-choice").innerHTML= "The computer choose: " + computerChoice;

            break;
    }



    console.log(result);
    document.getElementById('result').innerText = result;
    document.getElementById("score").innerHTML = score;
    document.getElementById("computerscore").innerHTML = computerscore;
    document.getElementById("level").innerHTML = level;
}