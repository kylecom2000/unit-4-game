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
    function ranNum () {
    randomNumber = Math.floor(Math.random() * (120-20)) + 20;
    console.log(randomNumber);
    
    }
    //give each button a value from a random number, turn inito function to call later.
    function crystalRandom() {
    for (var i = 0; i < 4; i++){
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log(crystalNumber);
        //assign to each crystal value ID, crystal0, 1, 2, 3.
        $("#crystal" + i).attr('value', crystalNumber);
        }
        //run random number function
        ranNum();
        // reset player total
        playerTotal = 0;
        $("#random").text(randomNumber);
        $("#playerTotal").text(playerTotal);
        
    }
    // Run random crystal number function immediately. 
    crystalRandom();
    // Listen for button clicks
    $(".button").click(function(){
        //add value of button to playerTotal
        // parseInt because it just kept treating it as a string.
        playerTotal += parseInt($(this).val());
        // change player total on screen.
        $("#playerTotal").text(playerTotal);
        

        if (playerTotal === randomNumber) {
            wins++;
            console.log("YOU WIN");
            $("#wins").text(wins);
            $("#playerTotal").text(playerTotal);
            setTimeout (function() {
                alert("YOU WIN");
            }, 1);
            setTimeout (function() {
                crystalRandom(); 
             }, 1);
        }

        if (playerTotal > randomNumber) {
            losses++;
            console.log("YOU LOSE");
            $("#losses").text(losses);
            $("#playerTotal").text(playerTotal);
            setTimeout (function() {
                alert("YOU LOSE");
            }, 1);
            setTimeout (function() {
               crystalRandom(); 
            }, 1);
        }
    });

    crystalRandom();
});