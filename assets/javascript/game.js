$(document).ready(function() {

    let artists = ["Yunomi", "Stessie", "Honeycomebear", "Madeon", "Pikasonic"];
    let guessedLetters = [];
    let guessingArtist = [];
    let artistName
    let numberofGuesses
    let wins = 0;
    let winSound1= new Audio("../music/HoneyComeBear - Dear.mp3")

    function startGame() {

        artistName = artists[Math.floor( Math.random() * artists.length)];

        if (artistName.length <= 6) {
            numberofGuesses= 8;
        } else if (artistName.length > 6 && artistName.length <= 9) {
            numberofGuesses= 10;
        } else if (artistName.length > 9) {
            numberofGuesses= 15;
        }

        for (var i = 0; i < artistName.length; i++) {

            if (artistName[i] === " ") {
                guessingArtist.push(" ");
            } else {
                guessingArtist.push(" ");
            }
        }

        updateDisplay();

    }














}