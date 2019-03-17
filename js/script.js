/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

var quotes = [
  { 
    quote: 'Its not the load that breaks you down, its the way you carry it.',
    source: 'www.goodreads.com',
    citation: 'Lou Holtz',
    year: 'XXXX'
  },
  { 
    quote: 'Do you want to know who you are? Dont ask. Act! Action will delineate and define you.',
    source: 'www.goodreads.com',
    citation: 'Thomas Jefferson',
    year: 'YYYY'
  },
  { 
    quote: 'The best preparation for tomorrow is doing your best today.',
    source: 'www.brainyquote.com',
    citation: 'H. Jackson Brown, Jr',
    year: 'ZZZZ'
  },
  { 
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'www.brainyquote.com',
    citation: 'Aristotle',
    year: 'AAAA'
  },
  { 
    quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
    source: 'www.goodreads.com',
    citation: 'Albert Einstein',
    year: 'BBBB'
  }
]

function getRandomQuote() {

  var i;
  var randomQuote;
  
  i = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[i];
  
  return randomQuote;
}

function printQuote() {

  var randomQuote = getRandomQuote();
  var message = '';
  var outputDiv;

  message = '<p class="quote">' + randomQuote.quote + '</p>';
  
  if (randomQuote.citation) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  } 
  
  if (randomQuote.year) {
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  
  message += '</p>';

  outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;

}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
