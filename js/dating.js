$(document).ready(function() {
  var personality = prompt("Which is more important? Humor or Looks?").toLowerCase();
  var hair = prompt("Do you prefer light or dark hair color?").toLowerCase();
  if (personality === "humor") {
    if (hair === "light") {
      $(".lightFunny").show();
    } else if (hair === "dark") {
      $(".darkFunny").show();
    }
  }
  if (personality === "looks") {
    if (hair === "dark") {
      $(".darkLooks").show();
    } else if (hair === "light") {
      $(".lightLooks").show();
    }
  }

});
