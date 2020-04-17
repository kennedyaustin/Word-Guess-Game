// Array to hold potential answers
let artists = ["Yunomi", "Stessie", "Honeycomebear", "Madeon", "Pikasonic"];      
let guessedLetters = [];
let guessingArtist = [];
let wins = 0;
let pause = false; // This var and setTimout function to not listen for keypress while game resets
      
let numberofGuesses;
let artistName;
  function startYourGame() {

    // Generate a random number to pick a word from the array
    artistName = artists[Math.floor(Math.random() * artists.length)].toUpperCase();

    if (artistName.length <= 6) {

      numberofGuesses = 8

    } else if (artistName.length > 6 && artistName.length <= 9) {

      numberofGuesses = 10

    } else if (artistName.length > 9) {

      numberofGuesses = 10

    } 
  
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

let usedArtists = [];
      
  function resetGame() {
    if (usedArtists.length === artists.length) {
      usedArtists = []
      wins = 0
      setTimeout(resetGame, 1000); 
    } else {
      
        pause = false;
      
        artistName = artists[Math.floor(Math.random() * artists.length)].toUpperCase();
        console.log(artistName)
      
        if (usedArtists.includes(artistName) === true) {
          resetGame();
        }
      
      
        if (artistName.length <= 6) {
          numberofGuesses = 8
        } else if (artistName.length >6 && artistName.length <= 9) {
          numberofGuesses = 10
        } else if (artistName.length >9) {
          numberofGuesses = 15
        } 
  
      guessedLetters = [];
      guessingArtist = [];
  
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
      
  function updateDisplay () {

    document.getElementById("numberofWins").innerText = wins;
    document.getElementById("currentArtist").innerText = guessingArtist.join("");
    document.getElementById("remainingGuesses").innerText = numberofGuesses;
    document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");

  };
      
  document.onkeydown = function(event) {

    if (isLetter(event.key) && pause === false) {

      checkingForLetters(event.key.toUpperCase());

    }
  }
      
  var isLetter = function(ch){

    return typeof ch === "string" && ch.length === 1
    && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");

  };
      
  function checkingForLetters(letterPressed) {

    var foundLetter = false;
      
    for (var i=0; i < artistName.length; i++) {

      if (letterPressed === artistName[i]) {

        guessingArtist[i] = letterPressed
        foundLetter = true

        if (guessingArtist.join("") === artistName) {

              wins++
              usedArtists.push(artistName)
              console.log(usedArtists)
              pause = true;
              updateDisplay();
              setTimeout(resetGame, 1000);

        }
      }
    }

    if (foundLetter === false) {

      if (guessedLetters.includes(letterPressed) === false) {
         
            guessedLetters.push(letterPressed)
            numberofGuesses--

      }

      if (numberofGuesses === 0) {
         
        usedArtists.push(artistName);
        console.log(usedArtists)
        guessingArtist = artistName.split();
        pause = true;
        setTimeout(resetGame, 1000);

      }
    }
        updateDisplay();
  };
      
      startYourGame();