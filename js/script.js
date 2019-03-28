/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*Array of quotes with object literals - is accessible globally*/

var quotes = [
  { 
    quote: 'Its not the load that breaks you down, its the way you carry it.',
    source: 'www.goodreads.com',
    citation: 'Lou Holtz',
    year: 'Not 2019'
  },
  { 
    quote: 'Do you want to know who you are? Dont ask. Act! Action will delineate and define you.',
    source: 'www.goodreads.com',
    citation: 'Thomas Jefferson',
    year: 'Not 2019',
    category: 'Inspirational'
  },
  { 
    quote: 'The best preparation for tomorrow is doing your best today.',
    source: 'www.brainyquote.com',
    citation: 'H. Jackson Brown, Jr',
    year: 'Not 2019'
  },
  { 
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'www.brainyquote.com',
    citation: 'Aristotle',
    year: 'Not 2019',
    category: 'Inspirational'
  },
  { 
    quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
    source: 'www.goodreads.com',
    citation: 'Albert Einstein',
    year: 'Not 2019'
  }
]

/* Generating a random number to grab a quote object and returns the random quote object */

function getRandomQuote() {

  var i;
  var randomQuote;
  
  i = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[i];
  
  return randomQuote;
}

/* Generating a random color and set the generated color as document background */

function randomBgColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
  document.body.style.background = bgColor;
  document.getElementById("loadQuote").style.backgroundColor = bgColor;
}

/* 
'printQuote()' function receives random quote property from 'getRandomQuote()' function and checks for 
the prescence of additional property and outputs the result to "quote-box" id. 
Finally it calls 'randomBgColor()' function to change the background colour randomly 
*/

function printQuote() {

  var randomQuote = getRandomQuote();
  var message = '';
  var outputDiv;

  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  
  if (randomQuote.citation) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  } 
  
  if (randomQuote.year) {
    message += '<span class="year">' + randomQuote.year +' '+'</span>';
  }

  if (randomQuote.category) {
    message +='<span class="category">' + randomQuote.category + '</span>';
  }
  
  message += '</p>';

  outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
  
  randomBgColor();
}

/* Sets '10 seconds' as interval time for every autorefresh, meanwhile it calls 'printQuote()' function */

var intervalID = window.setInterval(printQuote, 10000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


