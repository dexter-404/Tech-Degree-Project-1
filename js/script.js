/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  { 
    quote: 'Its not the load that breaks you down, its the way you carry it.',
    source: 'www.goodreads.com',
    citation: 'Lou Holtz'
  },
  { 
    quote: 'Do you want to know who you are? Dont ask. Act! Action will delineate and define you.',
    source: 'www.goodreads.com',
    citation: 'Thomas Jefferson'
  },
  { 
    quote: 'The best preparation for tomorrow is doing your best today.',
    source: 'www.brainyquote.com',
    citation: 'H. Jackson Brown, Jr'
  },
  { 
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'www.brainyquote.com',
    citation: 'Aristotle'
  },
  { 
    quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
    source: 'www.goodreads.com',
    citation: 'Albert Einstein'
  }
]



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[i];
  return randomQuote;
}

console.log(getRandomQuote());



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.