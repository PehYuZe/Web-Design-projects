const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

//localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.score-js').innerText = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

function updateScore(result) {
    if (result === 1){
        score.wins = score.wins + 1;
        document.querySelector('.result-js').innerText = 'You won!';
    }
    else if (result === 2){
        score.losses = score.losses + 1;
        document.querySelector('.result-js').innerText = 'You lost!';
    }
    else if (result === 3){
        score.ties = score.ties + 1;
        document.querySelector('.result-js').innerText = 'You tied!';
    }
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.score-js').innerText = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
}

function resetScore() {
    score.wins = score.losses = score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.result-js').innerText = 'Play the game!';
    document.querySelector('.score-js').innerText = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
}

function pickCompChoice() {
    let rand_Num = Math.random();
    //computer pick Rock
    if (rand_Num <1/3)
        return 'rock';
    else if (rand_Num >= 1/3 && rand_Num <=2/3)
        return 'paper';
    else if (rand_Num > 2/3)
        return 'scissors';
}

function result(playerChoice, compChoice) {
    if (playerChoice === 'rock'){
        if (compChoice === 'rock'){
            document.querySelector('.display-result-js').innerText = "You picked Rock || The Computer picked Rock";
            return 3;
        }
        else if (compChoice === 'paper'){
            document.querySelector('.display-result-js').innerText = "You picked Rock || The Computer picked Paper";
            return 2;
        }
        else if (compChoice === 'scissors'){
            document.querySelector('.display-result-js').innerText = "You picked Rock || The Computer picked Scissors";
            return 1;
        }
    }
    else if (playerChoice === 'paper'){
        if (compChoice === 'rock'){
            document.querySelector('.display-result-js').innerText = "You picked Paper || The Computer picked Rock";
            return 1;
        }
        else if (compChoice === 'paper'){
            document.querySelector('.display-result-js').innerText = "You picked Paper || The Computer picked Paper";
            return 3;
        }
        else if (compChoice === 'scissors'){
            document.querySelector('.display-result-js').innerText = "You picked Paper || The Computer picked Scissors";
            return 2;
        }
    }
    else if (playerChoice === 'scissors'){
        if (compChoice === 'rock'){
            document.querySelector('.display-result-js').innerText = "You picked Scissors || The Computer picked Rock";
            return 2;
        }
        else if (compChoice === 'paper'){
            document.querySelector('.display-result-js').innerText = "You picked Scissors || The Computer picked Paper";
            return 1;
        }
        else if (compChoice === 'scissors'){
            document.querySelector('.display-result-js').innerText = "You picked Scissors || The Computer picked Scissors";
            return 3;
        }
    }
}

let play = false;
let intervalId;

function startAutoplay() {
    if (play === false){
        play = true;
        document.querySelector('.autoplay-button-js').innerText = "Stop Play";
    }
    else if (play === true){
        play = false;
        document.querySelector('.autoplay-button-js').innerText = "Auto Play";
    }
}



function autoplay() {
    if (play === true) {
        intervalId = setInterval('updateScore(result(pickCompChoice(),pickCompChoice()))', 2000);
    }
    else if (play === false) {
        clearInterval(intervalId);
    }
}