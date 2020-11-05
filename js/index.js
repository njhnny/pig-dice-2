// BUSINESS LOGIC



let score = 0;
let total = 0;
let player = "player1";
function diceRoll() {
  let dice = Math.floor( Math.random() * 6 ) +1;
  
     if (dice > 1) {
       score = (score += dice);
       
     } else {
       score = (0);
       if (player = "player1") {
         player = ("player2");
       } else {
         player = ("player1");
       }
       $("p","currentplayer").text(player);
     } 
     $("p","#score").text(score);
     $("p","#dice").text(dice);
     $("p","currentplayer").text(player);
 };
 function hold() {
  let holdDisplay = (total += score);
  
  $("p","#total").text(holdDisplay);
  $("p","#dice").text("");
  score = (0);
  $("p","#score").text(score);
  
 };
 
 
$(document).ready(function() {
  $("#btn").click(diceRoll);
  $("#holdbtn").click(hold);
  
 });
 
  