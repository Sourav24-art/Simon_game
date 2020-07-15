var buttonColor = ["red","blue","green","yellow"];
var gamePattern = [];
  var userClickedPattern = [];
var level;
var count;

// Start the game
$("h1").click(function(){
  if($("h1").html()==="Press the Start"||"Game Over, Press the Start"){
    level = 0;
    nextSequence();
  }
});


// Generating new Sequence
function nextSequence()
{
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  levelChange();
  userClickedPattern.length = 0;
  count = 0;
}

// Detecting button Clicks
$(".btn").click(function(){
  var userChoosenColor = $(this).attr("id");
  playSound(userChoosenColor);
  animatePress(userChoosenColor);
  if(count<level){
    userClickedPattern.push(userChoosenColor);
    count++;
  if(gamePattern[count-1] == userClickedPattern[count-1]){
        if(count==level){
         setTimeout(nextSequence,1000);
        }
  }
  else{
     var wrong = new Audio("sounds/wrong.mp3");
     wrong.play();
     $("body").addClass("game-over");
     setTimeout(function(){
       $("body").removeClass("game-over");
     },200);
     gamePattern.length = 0;
     $("h1").html("Game Over, Press the Start");
     // call gameover
  }
}
else{
   var wrong2 = new Audio("sounds/wrong.mp3");
   wrong2.play();
   $("body").addClass("game-over");
   setTimeout(function(){
     $("body").removeClass("game-over");
   },200);
   gamePattern.length = 0;
   $("h1").html("Game Over, Press the Start");
   // call gameover
}
});

// Playing sounds
function playSound(name){
  if(name == "red")
  {
    var audio1 = new Audio("sounds/red.mp3");
    audio1.play();
  }
  else if(name == "blue"){
    var audio2 = new Audio("sounds/blue.mp3");
    audio2.play();
  }
  else if(name == "green"){
    var audio3 = new Audio("sounds/green.mp3");
    audio3.play();
  }
  else if(name == "yellow"){
    var audio4 = new Audio("sounds/yellow.mp3");
    audio4.play();
  }
}

// Animation effect
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);

}

// change Game levelCount
function levelChange(){
  $("h1").text("Level "+level);
}
