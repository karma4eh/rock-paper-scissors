$(document).ready(function() {
    const moves = ["rock", "paper", "scissors"];
    const outcomes = {
        "rock-scissors": "Jugador gana",
        "rock-paper": "Computadora gana",
        "paper-rock": "Jugador gana",
        "paper-scissors": "Computadora gana",
        "scissors-paper": "Jugador gana",
        "scissors-rock": "Computadora gana",
        "rock-rock": "Empate",
        "paper-paper": "Empate",
        "scissors-scissors": "Empate"
    };

    let userScore = 0;
    let cpuScore = 0;

    function resetGame() {
        userScore = 0;
        cpuScore = 0;
        $("#user-score").text("0");
        $("#cpu-score").text("0");
        $("#user-section, #cpu-section").css("background-color", "");
    }

    $(".btn-move").click(function() {
        const userMove = $(this).data("move");
        const cpuMove = moves[Math.floor(Math.random() * moves.length)];
        const resultKey = `${userMove}-${cpuMove}`;
        const result = outcomes[resultKey];

        $("#cpu-move").text(cpuMove);

        if (result === "Jugador gana") {
            userScore++;
            $("#user-score").text(userScore);
            $("#cpu-section").css("background-color", "red");
            $("#user-section").css("background-color", "");
        } else if (result === "Computadora gana") {
            cpuScore++;
            $("#cpu-score").text(cpuScore);
            $("#user-section").css("background-color", "red");
            $("#cpu-section").css("background-color", "");
        } else {
            $("#user-section, #cpu-section").css("background-color", "");
        }

        // Comprobar si el juego ha terminado
        if (userScore >= 10) {
            swal("¡Ganaste el juego!", {
                icon: "success",
                button: "Reiniciar",
            }).then(() => {
                resetGame(); 
            });
        } else if (cpuScore >= 10) {
            swal("¡Perdiste el juego!", {
                icon: "error",
                button: "Reiniciar",
            }).then(() => {
                resetGame(); 
            });
        } else {
            swal("Resultado", result, "info");
        }
    });

    $("#reset-game").click(function() {
        resetGame(); // Reiniciao manual
    });
});
