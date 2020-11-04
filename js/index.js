function diceRoll() {
  let dice = Math.floor( Math.random() * 6 ) +1;
  alert(dice);
  };

$(document).ready(function() {
  $("#btn").click(diceRoll);
 });
  