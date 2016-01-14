$(document).ready(function() {
  var animal = (prompt("Would you like to learn about snakes? Turtles? Or insects?").toLowerCase());

  if (animal === 'turtles') {
    $('.turtles').show();
  } else if (animal === 'snakes') {
    $('.snakes').show();
  } else {
    $('.insects').show();
  }

});
