const choices = ['rock', 'paper', 'scissor']

const player = document.getElementById('player')
const computer = document.getElementById('computer')
const resultDisplay = document.getElementById('result')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = ''

    if (playerChoice === computerChoice){
        result = "IT'S A TIE"
    }
    else {
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissor') ? 'YOU WIN' : 'YOU LOSE'
                break
            case 'paper':
                result = (computerChoice === 'rock') ? 'YOU WIN' : 'YOU LOSE'
                break
            case 'scissor':
                result = (computerChoice === 'paper') ? 'YOU WIN' : 'YOU LOSE'
                break
        }
    }

    player.textContent = `PLAYER: ${playerChoice}`
    computer.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result

    resultDisplay.classList.remove('green', 'red')

    switch(result){
        case 'YOU WIN':
            resultDisplay.classList.add('green')
            playerScore.textContent = Number(playerScore.textContent) + 1
            break
        case 'YOU LOSE':
            resultDisplay.classList.add('red')
            computerScore.textContent = Number(computerScore.textContent) + 1
            break
    }
}