$(document).ready(function() {
  var age = parseInt(prompt("The voting age is 18. How old are you?"));

  if (age >= 18) {
    $(".over18").show();
  } else {
    $(".under18").show();
  }
});
