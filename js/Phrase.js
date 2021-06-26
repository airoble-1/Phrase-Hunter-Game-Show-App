"use strict"
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    let html = ""
    const phraseArray = this.phrase.split("")
    phraseArray.forEach((ele) => {
      if (ele === " ") {
        html += `<li class="space"> </li>`
      } else html += `<li class="hide letter ${ele}">${ele}</li>`
    })
    document.querySelector("#phrase ul").innerHTML = html
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter)
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const liHTMLCollection = document.getElementsByClassName(letter)
    const liArray = [...liHTMLCollection]
    liArray.forEach((li) => {
      li.classList.remove("hide")
      li.classList.add("show")
    })
  }
}
