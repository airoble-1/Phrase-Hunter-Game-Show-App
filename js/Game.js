/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0
    this.phrases = this.createPhrases()
    this.activePhrase = null
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase("Do not be stupid it might make you famous"),
      new Phrase("I am on a seafood diet"),
      new Phrase("May the force be with you"),
      new Phrase("Life will find a way"),
      new Phrase("There is no place like home"),
      new Phrase("Elementary my dear Watson"),
    ]
    return phrases
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById("overlay").style.display = "none"
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }
  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const letters = document.getElementsByClassName("letter")
    const lettersShown = document.getElementsByClassName("show")
    if (letters.length === lettersShown.length) {
      this.gameOver(true)
      this.resetGame()
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed = this.missed + 1
    console.log(this.missed)
    const tries = document.querySelectorAll(".tries")
    tries[0].classList.remove("tries")
    tries[0].classList.add("lost")
    tries[0].firstElementChild.src = "images/lostHeart.png"
    if (this.missed >= 5) {
      this.gameOver(false)
      this.resetGame()
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    if (gameWon) {
      document.getElementById("overlay").className = "win"
      document.getElementById("btn__reset").textContent = "Play Again?"
      document.getElementById("overlay").style.display = "flex"
      document.getElementById("game-over-message").textContent =
        "Game Over You Win =)"
    } else {
      document.getElementById("overlay").className = "lose"
      document.getElementById("btn__reset").textContent = "Play Again?"
      document.getElementById("overlay").style.display = "flex"
      document.getElementById("game-over-message").textContent =
        "Game Over You Lose =("
    }
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (button click event)
   */
  handleInteraction(e) {
    const letter = e.target.textContent
    const isMatch = this.activePhrase.checkLetter(letter)
    e.target.disabled = true
    if (isMatch) {
      e.target.classList.add("chosen")
      this.activePhrase.showMatchedLetter(letter)
      this.checkForWin()
    } else {
      e.target.classList.add("wrong")
      this.removeLife()
    }
  }
  /**
   * Restores all on-screen keys to intial state
   * Restores scoreboard to full lives
   *
   */
  resetGame() {
    const buttons = document.querySelectorAll("#qwerty button")
    buttons.forEach((btn) => {
      btn.className = "key"
    })
    const hearts = document.querySelectorAll(".lost")
    hearts.forEach((heart) => {
      heart.firstElementChild.src = "images/liveHeart.png"
      heart.className = "tries"
    })
  }
}
