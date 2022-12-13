/*------------ Constants ------------*/
import { getRandomQuote } from "../data/quotes.js"
import * as taylorAudio from '../js/audio.js'

/*------------ Variables ------------*/


/*---- Cached Element References ----*/

const quoteBtn = document.querySelector('#quote-button')
const cardContainer = document.querySelector('#card-container')



/*--------- Event Listeners ---------*/
quoteBtn.addEventListener('click', () => {
  taylorAudio.playShakeItOff()
  console.log(getRandomQuote())
})

/*------------ Functions ------------*/
