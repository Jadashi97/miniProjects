var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

// this keeps track if game has started

var started = false;

// creating a new variable callled  level and set it to 0

var level = 0;

// the H1 starts out with "Press any key" then changes to "level 0" when the game starts

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level" + level);
        nextSequence();
        started = true;
    }
});

// set this function to let the key flash when clicked

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id"); // this stores the id of the button clicked

    userClickedPattern.push(userChosenColor); // this appends the variable to the end of the new userClickedPattern 

    makeNoise(userChosenColor); // adding sound when pressed

    animationPress(userChosenColor); // adding animation

    // this passes the index of the last answer in the user's sequence after click happens \
    checkAnswer(userClickedPattern.length - 1);

});

// this is to check if the most recent user answer is the same as the game pattern

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // this checks that the player has finished their sequence  then calling the function after 1000milliseconds
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
            //if user is wrong, play this sound
            makeNoise("wrong");

            //this changes the h1 title the to say game over when wrong 

            $("#level-title").text("Game Over, Pess any Key to Restart");

            // apply the class to the body when the user gets one of the answers wrong then remove it afer 200 milliseconds

            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);

            // calling the function to restart the game when it is wrong
            startOver();
        }
};
// this randomly selects the selected color when the player plays
function nextSequence() {

    userClickedPattern = []; //this resets the userClickedPattern to an empty array when clicked

    level++; // increase level by 1 everytime nextSequence() is called

    $("#level-title").text("Level" + level); // update h1 with this change in the value of level

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); // looks for id to help flash the chosen color
    makeNoise(randomChosenColor);

};
// choosing a specific sound to play when randomChosenColor is pressed
function makeNoise(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};


// adding animation to the clicked button using jquery

function animationPress(currentColor) {
    $("#" + currentColor).addClass("pressed")

    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
};


// this restarts the game to default

function startOver() {
    level = 0;

    gamePattern = [];

    started = false;
};
