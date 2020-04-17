let artists = ['Stessie', 'Pikasonic', 'Honeycomebear', 'Madeon'];
let randomArtist = Math.floor(Math.random() * 4);
let chosenArtist = artists[randomArtist];
let myLength = chosenartist.length;

let display = [myLength];
let win = myLength;
let letters = chosenArtist.split('')
let attempts = 7;
let output = "";
let userLetter = "";

let setup = function() {

    for (var i = 0; i < chosenArtist.length; i++) {
        display [i] = "_ ";
        output = output + display [i];
    }

    document.getElementById("artists").textContent = output;
    output = "";

}
