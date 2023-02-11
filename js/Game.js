/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const hearts = document.querySelectorAll(".tries img");
const keys = document.getElementsByClassName("key");
const startScreenOverlay = document.getElementById("overlay");
const tries = document.querySelector(".tries");

class Game {
    constructor(game) {
        this.missed = 0;
        this.game = game;
        this.phrases = [
            new Phrase("an apple a day keeps the doctor away"),
            new Phrase("the devil is in the details"),
            new Phrase("birds of a feather flock together"),
            new Phrase("a penny for your thoughts"),
            new Phrase("a picture is worth a thousand words"),
            new Phrase("curiosity killed the cat"),
            new Phrase("actions speak louder than words"),
        ];
    }
    /**
     * random phrase from the phrases array
     * @returns {String} phrase
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        createLi.innerHTML = "";
        for (const key of keys) {
            key.disabled = false;
            key.classList = "key";
        }
        this.missed = 0;
        for (let heart of hearts) {
            heart.src = "images/liveHeart.png";
        }
        hidesGame.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(btn) {
        if (this.activePhrase.checkLetter(btn.innerHTML) === true) {
            btn.disabled = true;
            btn.classList.add("chosen");
            this.activePhrase.showMatchedLetter(btn.innerHTML);
            this.checkForWin();
        } else {
            btn.classList.add("wrong");
            this.removeLife();
        }
    }

    removeLife() {
        this.missed++;

        if (this.missed >= 5) {
            this.gameOver("lose");
        } else {
            hearts[hearts.length - this.missed].src = "../images/lostHeart.png";
        }
    }

    checkForWin() {
        const phraseLetters = document.getElementsByClassName("letter");
        let lettersShown = 0;
        for (let i = 0; i < phraseLetters.length; i++) {
            const e = phraseLetters[i];
            if (e.classList.contains("show")) {
                lettersShown++;
            }
        }

        if (lettersShown === phraseLetters.length) {
            this.gameOver("win");
        }
    }

    /**
     * this is called when the game is either won/lost
     * @param {String} result
     * displays the startScreenOverlay again with a different msg or style depending on the result
     */

    gameOver(result) {
        const gameOverMessage = document.getElementById("game-over-message");
        startScreenOverlay.style.display = "flex";

        if (result === "win") {
            gameOverMessage.innerHTML = "You won";
            startScreenOverlay.className = "win";
        } else if (result === "lose") {
            gameOverMessage.innerHTML = "Failure";
            startScreenOverlay.className = "lose";
        }
    }
}
this.activePhrase = null;
