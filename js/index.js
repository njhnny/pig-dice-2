// BUSINESS LOGIC

function Players() {
  this.name = "";
  this.diceRoll = "";
  this.roundScore = 0;
  this.total = 0;
  this.active = active;
}
let player1 = new Players();
let player2 = new Players();
let score = 0;
let total = 0;

function diceRoll() {
  $("p","#currentplayer").text(player);
  let dice = Math.floor( Math.random() * 6 ) +1;
     if (dice > 1) {
       score = (score += dice); 
     } else {
       score = (0);
     } 
     $("p","#score").text(score);
     $("p","#dice").text(dice);
     $("p","#currentplayer").text(player);

     player1.roundScore = score;
     player1.roundScore = dice;
     
 };
 function hold() {
  let holdDisplay = (total += score);
  
  $("p","#total").text(holdDisplay);
  $("p","#dice").text("");
  score = (0);
  $("p","#score").text(score);
  
 };
 //user logic
$(document).ready(function() {
  $("#btn").click(diceRoll);
  $("#holdbtn").click(hold);
  
 });
 
  