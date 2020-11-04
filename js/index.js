// BUSINESS LOGIC
function diceRoll() {
  let dice = Math.floor( Math.random() * 6 ) +1;
  alert(dice);
  };

function roundScore() {
let score = 0;
  if (dice > 1) {
  score = (score += dice);
  }
 alert("the score is" + score);
}
$(document).ready(function() {
  $("#btn").click(diceRoll, roundScore);
 });
  