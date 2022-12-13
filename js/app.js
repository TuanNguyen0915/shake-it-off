/*------------ Constants ------------*/
import { getRandomQuote } from "../data/quotes.js"
import * as taylorAudio from '../js/audio.js'

/*------------ Variables ------------*/
const quotes = []


/*---- Cached Element References ----*/

const quoteBtn = document.querySelector('#quote-button')
const cardContainer = document.querySelector('#card-container')



/*--------- Event Listeners ---------*/
quoteBtn.addEventListener('click', createQuote)

/*------------ Functions ------------*/

function render() {
  cardContainer.innerHTML = ''
  quotes.forEach(quote => {
    appendQuote(quote)
  })
}

function appendQuote(quote) {
  let quoteCard = document.createElement('div')
  quoteCard.className = `card`
  quoteCard.innerHTML = 
  `<div>
    <p>${quote.text}</p>
    <p>${quote.isTaylor ? '-- T-Swift' : '-- A. Hater'}</p>
  </div>`
  cardContainer.appendChild(quoteCard)
}

function createQuote() {
  taylorAudio.playShakeItOff()
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
  render()
}