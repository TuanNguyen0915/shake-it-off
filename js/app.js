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

function createQuote() {
  taylorAudio.playShakeItOff()
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
  console.log(quotes)
}