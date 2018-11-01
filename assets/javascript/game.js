// Crystal Collector Game
// How to Play
// You will be given a random number at the start of the game.
// There are four crystals below. By clicking on a crystal, 
// you will add a specific amount of points to your total score.
// You win the game by matching your total score to the random number.
// You lose the game if your total score goes above the random number.
// The value of each crystal is hidden from you and generated at random at the beginnig of each game.

// Each game:
// Crystals need random numbers from 1-12 
// Generate/display random number from 19-120

// check if randomNumber === userNumber
// if true, add to wins, start over random number generator
// if false keep game going
// if user number is > randomNumber then add to losses.
// The game restarts if player wins or loses.



// Crystal array instead of crystals on page?

// a function obejct to run the game.
$(document).ready(function() {

    //variables
    var wins = 0;
    var losses = 0;
    var randomNumber;
    var playerTotal = 0;

    // Generate random number 
    randomNumber = Math.floor(Math.random() * (120-20)) + 20;
    console.log(randomNumber);
    
    //give each button a value from a random number
    for (var i = 0; i < 4; i++){
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log(crystalNumber);
        //assign to each crystal value ID, crystal0, 1, 2, 3.
        $("#crystal" + i).attr('value', crystalNumber);
    }

    //HTML IDs random, wins, losses, playerTotal
    //  post random number to html
    $("#random").text(randomNumber);

    
    // Listen for button clicks
    $(".button").click(function(){
        //add value of button to playerTotal
        // parseInt because it just kept treating it as a string.
        playerTotal += parseInt($(this).val());
        // change player total on screen.
        $("#playerTotal").text(playerTotal);
    });

    if (playerTotal === randomNumber) {
        console.log("YOU WIN");
        wins++;
        // restart game
    }

    if (playerTotal > randomNumber) {
        console.log("YOU LOSE");
        losses++;
        // restart game
    }



    $("#wins").text(wins);

});


