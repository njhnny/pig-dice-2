// BUSINESS LOGIC

function Players(name, diceRoll, roundScore, total, active) {
  this.name = name;
  this.diceRoll = diceRoll;
  this.roundScore = roundScore;
  this.total = total;
  this.active = active;
}
let player1 = new Players("Player 1", "", 0, 0, true);
let player2 = new Players("Player 2", "", 0, 0, true);
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
     player1.diceroll = dice;
     
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
 
  