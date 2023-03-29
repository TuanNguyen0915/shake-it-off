/*------------ Constants ------------*/
import { getRandomQuote } from "../data/quotes.js"
import * as taylorAudio from "./audio.js"



/*------------ Variables ------------*/

const quotes = []

/*---- Cached Element References ----*/
const quoteBtn = document.querySelector('#quote-button')
const cardContainer = document.querySelector('#card-container')


/*--------- Event Listeners ---------*/

quoteBtn.addEventListener('click', createQuote)

/*------------ Functions ------------*/

function createQuote() {
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
  render()
}

function render() {
  cardContainer.innerHTML = ''
  quotes.forEach(quote => {
    appendQuote(quote)
  })
}

function appendQuote(quote) {
  let quoteCard = document.createElement('div')
  quoteCard.className = `card ${quote.isTaylor ? 'taylor' : 'not-taylor'}`
  quoteCard.innerHTML = `
  <div>
    <p>${quote.text}</p>
    <p>${quote.isTaylor ? '-- T-Swift' : '-- A Hater'}</p>
  </div>`
  cardContainer.appendChild(quoteCard)
}

//// - Add an HTML button that will be used to add a quote
//// - Add a container element for the card components to be appended to
//// - Add a cached element reference for the button
//// - Add a cached element reference for the container element in the JS file
//// - Add an event listener to the button
//// - ~~Write and export a function to access our quote data~~
//// - Import the function that will access the quote data
//// - Ensure the function that we have built will work as intended
//// - Tweak event listeners so that the quote data is stored in a variable
// - Create a card so each quote will have a card associated with it
// - Create a render function
// - Add a function to handle appending a card to the container element
// - Add a button to the card so that we can remove the quote
// - When the delete button is clicked, remove the quote from the array
// - Add a favicon to our site