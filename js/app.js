/*------------ Constants ------------*/
import { getRandomQuote } from "../data/quotes.js";
/*------------ Variables ------------*/

/*---- Cached Element References ----*/
const quoteBtn = document.querySelector("#quote-button");
const cardContainer = document.querySelector("#card-container");

/*--------- Event Listeners ---------*/
quoteBtn.addEventListener("click", () => {
  console.log(getRandomQuote());
});
/*------------ Functions ------------*/
