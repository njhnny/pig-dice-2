// BUSINESS LOGIC
let score = 0;
function diceRoll() {
  let dice = Math.floor( Math.random() * 6 ) +1;
  alert(dice);
     if (dice > 1) {
       score = (score += dice);
       
     }
     $("p").text(score);
 };
$(document).ready(function() {
  $("#btn").click(diceRoll);
  
  
 });
 
  