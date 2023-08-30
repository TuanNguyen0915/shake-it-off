/*------------ Constants ------------*/
import { getRandomQuote } from "../data/quotes.js";
import * as taylorAudio from "./audio.js";
/*------------ Variables ------------*/
const quotes = [];
/*---- Cached Element References ----*/
const quoteBtn = document.querySelector("#quote-button");
const cardContainer = document.querySelector("#card-container");

/*--------- Event Listeners ---------*/
quoteBtn.addEventListener("click", createQuote);

/*------------ Functions ------------*/

function createQuote() {
  const newQuote = getRandomQuote();
  quotes.push(newQuote);
  console.log(quotes);
  render();
}

function render() {
  cardContainer.innerHTML = "";
  quotes.forEach((quote) => {
    appendQuote(quote);
  });
}

function appendQuote(quote) {
  console.log("quote is: ", quote);
}
