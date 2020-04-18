// Array to hold potential answers
let artists = ["Yunomi", "Stessie", "Honeycomebear", "Madeon", "Pikasonic"];      
let guessingArtist = [];  
let numberofGuesses = 0
let artistName = ''

  function startYourGame() {

    // Generate a random number to pick a word from the array
    artistName = artists[Math.floor(Math.random() * artists.length)].toUpperCase();

    // Sets the number of guesses the user will have to get the artists name
    if (artistName.length <= 6) {

      numberofGuesses = 8

    } else if (artistName.length > 6 && artistName.length <= 9) {

      numberofGuesses = 9

    } else if (artistName.length > 9) {

      numberofGuesses = 10

    } 

    for (var i=0; i < artistName.length; i++) {
      // Creates spaces for the user to type in, when they correctly guess
      // part of the artists name
      if (artistName[i] === " ") {

        guessingArtist.push(" ")

      } 
      // Puts the underscores under "Current Word"
      else {

        guessingArtist.push("_");

      }
      
    }
    updateDisplay();
  }

let guessedLetters = [];
let wins = 0; 

  // This function will change these specific parts of the page as the user
  // inputs values onto the site        
  function updateDisplay () {
  
    document.getElementById("numberofWins").innerText = wins;
    document.getElementById("currentArtist").innerText = guessingArtist.join("");
    document.getElementById("remainingGuesses").innerText = numberofGuesses;
    document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
  
  };

  // This function will be checking whether the letters that the user types 
  // are correct or not
  function checkingForLetters(letterPressed) {

    // This variable defines the letters that the user will be putting in 
    var foundLetter = false;
      
    for (var i=0; i < artistName.length; i++) {

      // If the letter that's pressed is part of one artists name,
      if (letterPressed === artistName[i]) {

        // the letter will take the place of the " "/ "_" spots under Current Word
        guessingArtist[i] = letterPressed
        foundLetter = true

        // If the letters that are in the guessingArtist array match the name inside of the
        // artistName array then the user has guessed the artist correctly
        if (guessingArtist.join("") === artistName) {

            wins++
            usedArtists.push(artistName)
            stopinput = true;
            updateDisplay();
            setTimeout(resetGame, 1000);

        }
      }
    }

  // This is how the remaining guesses number will decrease
  // if the user guesses the wrong letter in the artist name
  if (foundLetter === false) {

    if (guessedLetters.includes(letterPressed) === false) {

      // The letters that are input by the user will replace the empty array of guessedLetters
      guessedLetters.push(letterPressed)
      numberofGuesses--

    }

    // If the user runs out of guesses the page will show the name of the artist before
    // moving onto the next hangman puzzle
    if (numberofGuesses === 0) {
        
      // The artist name that wasn't guessed correctly will be put into the empty array usedArtists
      usedArtists.push(artistName);
      guessingArtist = artistName.split();
      stopinput = true;
      setTimeout(resetGame, 1000);

    }
  }
  updateDisplay();
};

let usedArtists = [];
let stopinput = false;

  // This function will "reset the game" or change the artist that the user will be guessing      
  function resetGame() {

    // If the user is able to guess all of the artists name correctly, the used artists
    // array will empty itself so that the user can play again
    if (usedArtists.length === artists.length) {
      
      usedArtists = []
      setTimeout(resetGame, 1000); 

    } else {
      
        stopinput = false;
      
        artistName = artists[Math.floor(Math.random() * artists.length)].toUpperCase();
        console.log(artistName)
      
        if (usedArtists.includes(artistName) === true) {
          resetGame();
        }
      
        // Without this, the guesses will continue to go down even after the user
        // guesses one of the words correctly
        if (artistName.length <= 6) {
          numberofGuesses = 8
        } else if (artistName.length >6 && artistName.length <= 9) {
          numberofGuesses = 9
        } else if (artistName.length >9) {
          numberofGuesses = 10
        }

      // This will clear these 2 arrays
      guessedLetters = [];
      guessingArtist = [];
      
      // Resets the lines and spaces for user to type into
      for (var i=0; i < artistName.length; i++) {

        if (artistName[i] === " ") {

          guessingArtist.push(" ")

        } 
        else {

          guessingArtist.push("_");

        }
      }
      updateDisplay();
    }
  };
      
  document.onkeydown = function(event) {
    
    if (isLetter(event.key) && stopinput === false) {

      checkingForLetters(event.key.toUpperCase());

    }
  }
      
  var isLetter = function(ch){

    return typeof ch === "string" && ch.length === 1
    && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");

  };
      
  startYourGame();