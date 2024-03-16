let playGame = confirm("Shall we play rock, paper, scissor?");
if (playGame) {
    // play
    let myChoice = prompt("Please enter rock, paper, scissor!");
    if (myChoice) {
        let choice = myChoice.trim().toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissor") {
            let computerChoice = Math.floor((Math.random() * 3) + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                    : "scissor";
            let result = choice === computer ? "Game Tie"
                : choice === "rock" && computer === "paper" ? "Computer Win"
                    : choice === "paper" && computer === "scissor" ? "Computer Win"
                        : choice === "scissor" && computer === "rock" ? "Computer Win"
                            : "You Win";
            alert(result);
            let playAgain = confirm("Play Again!");
            playAgain ? location.reload() : alert("Ok, Thanks for playing!");
        }
        else{
            alert("You enter the wrong input!");
        }
    }
    else {
        alert("Please enter your choice!");
    }
}
else {
    alert("Ok, Maybe next time.");
}