/*------------ Constants ------------*/
import { getRandomQuote } from "../data/quotes.js"
import * as taylorAudio from '../js/audio.js'

/*------------ Variables ------------*/
const quotes = []


/*---- Cached Element References ----*/

const quoteBtn = document.querySelector('#quote-button')
const cardContainer = document.querySelector('#card-container')
const lightDarkBtn = document.querySelector('#light-dark-button')
const body = document.querySelector('body')


/*--------- Event Listeners ---------*/
quoteBtn.addEventListener('click', createQuote)
cardContainer.addEventListener('click', deleteQuote)
lightDarkBtn.addEventListener('click', toggleLightDark)

/*------------ Functions ------------*/

checkDarkPref()

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
  if (body.className === 'dark') {
    taylorAudio.playDarkNight()
  } else {
    taylorAudio.playDaylight()
  }
}

function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}

function deleteQuote(evt)  {
  if(evt.target.className === 'delete-btn') {
    const idx = evt.target.id.replace('delete-btn-', '')
    taylorAudio.playNoNiceThings()
    quotes.splice(idx, 1)
    render()
  }
}



function render() {
  cardContainer.innerHTML = ''
  quotes.forEach((quote, idx) => {
    appendQuote(quote, idx)
  })
  // quotes.forEach(function(quote, idx) {
  //   appendQuote(quote, idx)
  // })
}

function appendQuote(quote, idx) {
  let quoteCard = document.createElement('div')
  quoteCard.className = `card ${quote.isTaylor ? 'taylor' : 'not-taylor'}`
  quoteCard.innerHTML = 
  `<div>
    <p>${quote.text}</p>
    <p>${quote.isTaylor ? '-- T-Swift' : '-- A. Hater'}</p>
  </div>
  <footer>
    <button class="delete-btn" id="delete-btn-${idx}">X</button>
  </footer>
  `
  cardContainer.appendChild(quoteCard)
}

function createQuote() {
  taylorAudio.playShakeItOff()
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
  render()
}