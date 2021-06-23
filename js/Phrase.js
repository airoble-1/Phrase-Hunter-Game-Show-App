"use strict"
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }
  addPhraseToDisplay() {
    let html
    phraseArray = this.phrase.split()
    phraseArray.forEach((ele) => {
      if (ele === " ") {
        html += `<li class="space"> </li>`
      } else {
        ;`<li class="hide letter ${ele}">${ele}</li>`
      }
    })
  }
  checkLetter() {
    document.getElementById("qwerty").addEventListener("click", () => {
      const isMatch =
        e.target.value === document.querySelector(`.${e.target.value}`).value
          ? true
          : false
    })
    return isMatch
  }
  showMatchedLetter() {
    if (this.checkLetter()) {
      const matchedLetters = document.querySelectorAll(`.${e.target.value}`)
      matchedLetters.forEach((letter) => {
        letter.classList.remove("hide")
        letter.classList.add("show")
      })
    }
  }
}
