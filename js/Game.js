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
      new Phrase("Don't be stupid it might make you famous"),
      new Phrase("I am on a seafood diet"),
      new Phrase("May the force be with you"),
      new Phrase("Life will find a way"),
      new Phrase("There is no place like home"),
      new Phrase("Elementary my dear Watson"),
    ]
    return phrases
  }

  startGame() {
    document.getElementById("overlay").style.display = "none"
    Phrase
    this.activePhrase = this.getRandomPhrase()
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }
  handleInteraction() {}
}
