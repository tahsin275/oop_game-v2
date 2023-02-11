/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

const createLi = document.querySelector("#phrase ul");
const hidesGame = document.getElementById("overlay");
// const qwerty = document.getElementById("qwerty");
const keyboard = document.getElementById("qwerty");
const btnClick = document.getElementById("btn__reset");

btnClick.addEventListener("click", () => {
    game.startGame();
});

keyboard.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        game.handleInteraction(e.target);
    }
});

document.addEventListener("keyup", (e) => {
    for (let btn of keys) {
        if (btn.innerHTML === e.key) {
            game.handleInteraction(btn);
        }
    }
});
